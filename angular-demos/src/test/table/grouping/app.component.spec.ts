import { ComponentFixture, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableModule, TableComponent, Table } from 'smart-webcomponents-angular/table';

import { TestHarness, TableTestHarness, TableGroupingFormatFuncion } from './../../scripts/test.tools';

declare global {
  interface Window { TestHarness: any; }
}

//Fixture path
import { AppComponent } from './../../../table/grouping/app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, TableModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

    fixture.destroy();
  });


  describe('Testing with DataSource and Grouiping changing', () => {
    let tableComponent: TableComponent,
      tableElement: Table,
      tools: TableTestHarness,
      fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      tableComponent = fixture.componentInstance.table;
      tableElement = tableComponent.nativeElement;
      tools = new TableTestHarness(tableElement);
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('when grouping is enabled and dataSource is re-loaded', () => {
      //ClearGrouping
      tableComponent.clearGrouping();

      //Reload dataSource with only 1 data item
      tableComponent.dataSource = tools.getDataSourceFromColumns(tableComponent.columns, 1);
      fixture.detectChanges();

      tableComponent.addGroup('productName');

      //Expect to be grouped by quantity
      expect(tools.getRowGroups().length).toBe(1);

      tableComponent.dataSource = tools.getDataSourceFromColumns(tableComponent.columns, 10);

      //Expect to be grouped by quantity
      expect(tools.getRowGroups().length).toBeGreaterThan(1);
      expect(tools.getRowGroups().length).toBeLessThan(11);

      tableComponent.removeGroup('productName');

      //Expect to be grouped by quantity
      expect(tools.getRowGroups().length).toBe(0);

      //Destroy the fixture to make sure that everything is clean
      fixture.destroy();
    });

    it('when sorting is enabled and grouping is changed', () => {
      //ClearGrouping
      tableComponent.sortMode = 'one';
      tableComponent.sortBy('productName', 'asc');
      fixture.detectChanges();

      const dataSource = tableComponent.dataSource.toArray(),
        groupNames = dataSource.reduce((acc, item) => {
          const value = item.productName;

          if (acc.indexOf(value) < 0) {
            acc.push(value);
          }

          return acc
        }, []);
      let groupRows = tools.getRowGroups();

      for (let i = 0, max = groupRows.length; i < max; i += 1) {
        //Expect groups to be sorted in ascending order
        expect(groupRows[i].querySelector('.group-label-value').textContent).toEqual(groupNames[i]);
      }

      //Sort the column in descending order
      tableComponent.sortBy('productName', 'desc');
      groupNames.reverse();

      groupRows = tools.getRowGroups();

      for (let i = 0, max = groupRows.length; i < max; i += 1) {
        //Expect groups to be sorted in ascending order
        expect(groupRows[i].querySelector('.group-label-value').textContent).toEqual(groupNames[i]);
      }

      //Destroy the fixture to make sure that everything is clean
      fixture.destroy();
    });

    it('when grouping is enabled and sorting is applied by clicking on the column headers', () => {
      const columns = tableComponent.columns,
        dataSource = tableComponent.dataSource.toArray(),
        dataField = columns[1].dataField,
        productNames = dataSource.map(i => i[dataField]);
      let columnElement = tools.getColumn(dataField),
        firstGroupRow = tools.getRowGroups()[0],
        firstItemProductName = tableComponent.dataSource[0].productName;

      //Expect data not to be sorted
      //Expect the first group item to have a value that matches the first data source item
      expect(firstGroupRow.querySelector('.group-label-value').textContent).toEqual(firstItemProductName);
      expect(dataField).toEqual('productName');
      expect(dataSource[0][dataField]).toEqual(dataSource[0].productName);
      expect(columnElement.querySelector('.sort-by.asc')).toBeNull();
      expect(columnElement.querySelector('.sort-by.desc')).toBeNull();

      tableComponent.sortMode = 'one';
      fixture.detectChanges();

      //Click once to sort in ascending order
      tools.clickHeader(dataField);

      let sortedProductNames = dataSource.map(i => i[dataField]);
      const rowGroupNames = tools.getRowGroups()

      //Expect the sort arrow to be present inside the header section
      expect(columnElement.querySelector('.sort-by.asc')).not.toBeNull();
      expect(columnElement.querySelector('.sort-by.desc')).toBeNull();

      //expect the dataSource to be sorted
      expect(sortedProductNames.toString()).not.toEqual(productNames.toString());

      //Expect the firstGroupRow to be different
      expect(firstGroupRow).not.toBe(tools.getRowGroups()[0]);

      firstGroupRow = tools.getRowGroups()[0];

      //Expect the dataSource to be sorted as well and to match the group label
      expect(firstGroupRow.querySelector('.group-label-value').textContent).toEqual(tableComponent.dataSource[0].productName);

      //Click twice to sort in descending order
      tools.clickHeader(dataField);

      //Expect the sort arrow to be present inside the header section
      expect(columnElement.querySelector('.sort-by.asc')).toBeNull();
      expect(columnElement.querySelector('.sort-by.desc')).not.toBeNull();

      //Expect the firstGroupRow to be different
      expect(firstGroupRow).not.toBe(tools.getRowGroups()[0]);

      firstGroupRow = tools.getRowGroups()[0];

      //Expect the dataSource to be sorted as well and to match the group label
      expect(firstGroupRow.querySelector('.group-label-value').textContent).toEqual(tableComponent.dataSource[0].productName);

      //Click third time to remove the sorting from column
      tools.clickHeader(dataField);

      sortedProductNames = dataSource.map(i => i[dataField]);

      //Expect the sort arrow to not be present in the column header
      expect(columnElement.querySelector('.sort-by.asc')).toBeNull();
      expect(columnElement.querySelector('.sort-by.desc')).toBeNull();

      //expect the dataSource to be back what it was initially
      expect(sortedProductNames.toString()).toEqual(productNames.toString());

      //Destroy the fixture to make sure that everything is clean
      fixture.destroy();
    });

    it('when grouping is enabled and sorting is applied and we store and reload the state of the Table', async () => {
      const columns = tableComponent.columns,
        dataSource = tableComponent.dataSource,
        productNamesBeforeSort = dataSource.toArray().map(i => i.productName);
      let columnElement = tools.getColumn('productName');

      tableComponent.sortMode = 'one';
      fixture.detectChanges();

      tools.clickHeader('productName');

      const tableState = await tableComponent.getState();

      expect(tableState.sorted.length).not.toBe(0);
      expect(tableState.sorted.length).toBe(1);

      const sortingDetails = tableState.sorted[0],
        sortedProductNames = dataSource.toArray().map(i => i.productName);

      expect(sortingDetails.dataField).toEqual('productName');
      expect(sortingDetails.direction).toEqual('asc');

      expect(columnElement.querySelector('.sort-by.asc')).not.toBeNull();
      expect(columnElement.querySelector('.sort-by.desc')).toBeNull();

      tableComponent.clearSort();

      expect(columnElement.querySelector('.sort-by.asc')).toBeNull();
      expect(columnElement.querySelector('.sort-by.desc')).toBeNull();

      //Remove grouping
      tableComponent.clearGrouping();

      //Expect the groups to be 0
      expect(tools.getRowGroups().length).toBe(0);

      //Restore to the saved state
      tableComponent.loadState(tableState);

      //The column element is new after the loading
      columnElement = tools.getColumn('productName');

      //expect sorting to be restored and grouping to be restored
      expect(columnElement.querySelector('.sort-by.asc')).not.toBeNull();
      expect(columnElement.querySelector('.sort-by.desc')).toBeNull();
      expect(tools.getRowGroups().length).toBeGreaterThan(0);

      const currentProductNames = dataSource.toArray().map(i => i.productName);

      //Check the dataSource if it is sorted
      expect(productNamesBeforeSort.toString()).not.toEqual(currentProductNames.toString());
      expect(sortedProductNames.toString()).toEqual(currentProductNames.toString());

      //Destroy the fixture to make sure that everything is clean
      fixture.destroy();
    });

    it('apply different column grouping when sorting is already on and check if the sorting order is preserved', fakeAsync(() => {
      //Sort by quantity in descending order
      tableComponent.sortMode = 'one';
      tableComponent.sortBy('quantity', 'desc');
      fixture.detectChanges();

      const dataSource = tableComponent.dataSource.toArray(),
        columns = tableComponent.columns;
      let groupRows = tools.getRowGroups();

      //Expect to not have row groups
      // expect(tools.getRowGroups().length).toBe(0);

      //Add another group
      tableComponent.addGroup('quantity');

      //expand first group
      tools.clickRowArrowByIndex(0);

      tick(50);

      const columnLabel = columns.find(i => i.dataField === 'quantity').label,
        firstGroupRowDetails = tools.getGroupRowDetails(groupRows[0]);
      let nestedRowGroups = tools.getNestedRowGroupsByLevel(1), lastValue;

      //Expect to have nested groups with level 1
      //Only 3 because the other groups are not expanded and are still hidden
      expect(nestedRowGroups.length).toBeGreaterThan(0);

      for (let i = 0, max = nestedRowGroups.length; i < max; i += 1) {
        const nestedRowGroupDetails = tools.getGroupRowDetails(nestedRowGroups[i]),
          count = parseInt(nestedRowGroupDetails.count.replace(/\(|\)/g, ''));

        //Expect the previous value (Quantity) to be less than the next, since it's sorted by quantity in descending order
        if (lastValue !== undefined) {
          expect(parseInt(lastValue) >= parseInt(nestedRowGroupDetails.value)).toBeTrue();
        }

        expect(nestedRowGroupDetails.name.indexOf(columnLabel) === 0).toBeTrue();

        lastValue = nestedRowGroupDetails.value;

        //expect the number to correspond to the actual number of records corresponding to the group in the DataSource
        expect(dataSource.filter(i => i.productName === firstGroupRowDetails.value && i.quantity === parseInt(lastValue)).length).toBe(count);
      }

      tableComponent.removeGroup('productName');

      //Expect not to have level 1 nested groups
      expect(tools.getNestedRowGroupsByLevel(1).length).toBe(0);

      //expect the sorting order to be the same
      groupRows = tools.getRowGroups();

      lastValue = undefined;

      for (let i = 0, max = groupRows.length; i < max; i += 1) {
        const nestedRowGroupDetails = tools.getGroupRowDetails(groupRows[i]),
          value = parseInt(nestedRowGroupDetails.value),
          count = parseInt(nestedRowGroupDetails.count.replace(/\(|\)/g, '')),
          groupDataItems = dataSource.filter(i => i.quantity === value);

        //Check if the group value corresponds to the data source 
        expect(value).toBe(groupDataItems[0].quantity);

        //Check if the number of records corresponds to the group item count
        expect(count).toBe(dataSource.filter(i => i.quantity === value).length);

        if (lastValue !== undefined) {
          expect(lastValue >= value).toBeTrue();
        }

        lastValue = value;
      }

      //Destroy the fixture to make sure that everything is clean
      fixture.destroy();
    }));
  });
});
