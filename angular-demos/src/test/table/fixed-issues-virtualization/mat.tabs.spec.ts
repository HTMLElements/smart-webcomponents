import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, fakeAsync, TestBed, tick, flush } from '@angular/core/testing';
import { Table, TableColumn, TableComponent, TableModule } from 'smart-webcomponents-angular/table';
import { TestHarness, TableTestHarness } from 'src/test/scripts/test.tools';

/**
 * The following Test Spec tests the Table with Virtualization
 */
interface TableDataSource {
  [property: string]: any;
}

interface DataSourceSettings {
  [property: string]: any;
}

/**
* Host component for testing @see TableComponent
*/
@Component({
  selector: 'host-component',
  template: `
    <mat-tab-group #matTabGroup [(selectedIndex)]="selectedIndex" animationDuration="0ms">
      <mat-tab label="Left">
          <smart-table #table [selection]="selection" selectionMode="extended" sortMode="one" freeze-header [columns]="columns"
            [dataSource]="dataSource" [grouping]="grouping" [virtualization]="virtualization"
            columnSizeMode="auto" columnMinWidth="100" [columnResize]="true" (change)="handleSelectionChange()">
          </smart-table>
        </mat-tab>
      <mat-tab label="Right">
            Other content
      </mat-tab>
    </mat-tab-group>`
})

class TableHostComponent implements OnInit {
  @ViewChild('table', { read: TableComponent, static: true }) table!: TableComponent;
  @ViewChild('matTabGroup', { static: false }) tabGroup: MatTabGroup;

  selectedIndex: number = 0;
  dataSource = [];
  dataSourceSettings = {};
  columns = [];
  keyboardNavigation: boolean = false;
  virtualization: boolean = true;
  selection: boolean = false;
  grouping: boolean = false;

  ngOnInit(): void { }

  //Selection Change handler
  handleSelectionChange(event: CustomEvent): void { }

  setTab(index: number) {
    // maybe add some bounds and null checking
    this.selectedIndex = index;
  }
}

describe('Table HostComponent', () => {
  let hostComponent: TableHostComponent;
  let component: TableComponent;
  let fixture: ComponentFixture<TableHostComponent>;
  let tools: TableTestHarness;
  let smartTable: Table;
  let TableMockColumns = [
    { label: 'id', dataField: 'id', dataType: 'number' },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
    { label: 'Price', dataField: 'price', dataType: 'number' },
    { label: 'Property_Group', dataField: 'property_all', dataType: 'string' }
  ] as TableColumn[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableHostComponent, TableComponent],
      imports: [BrowserAnimationsModule, MatTabsModule, MatIconModule, MatNativeDateModule, TableModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(TableHostComponent);
    hostComponent = fixture.componentInstance;
    component = hostComponent.table;
    smartTable = component.nativeElement as Table;
    tools = new TableTestHarness(smartTable);
    fixture.detectChanges();
  });

  describe('Virtualized Table', () => {
    beforeEach(() => {
      hostComponent.columns = TableMockColumns;
      hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 50);
      fixture.detectChanges();
    });

    it('to show the Table component when switching between Material Tabs', fakeAsync(() => {
      //https://github.com/ni-kismet/jqx/issues/1737
      const tabGroupComponent = hostComponent.tabGroup,
        tabs = tabGroupComponent._tabs.toArray();

      expect(tabGroupComponent._elementRef.nativeElement.querySelector('smart-table')).not.toBeNull();
      expect(tabs[0].position).toBe(0);
      expect(tabs[1].position).toBe(1);

      hostComponent.setTab(1);
      fixture.detectChanges();
      tick(50);

      expect(tabGroupComponent.selectedIndex).toBe(1);
      expect(tabs[0].position).toBe(-1);
      expect(tabs[1].position).toBe(0);

      hostComponent.setTab(0);
      fixture.detectChanges();
      tick(50);

      expect(tabs[0].position).toBe(0);
      expect(tabs[1].position).toBe(1);
      expect(tabGroupComponent.selectedIndex).toBe(0);
      expect(hostComponent.tabGroup._elementRef.nativeElement.querySelector('smart-table')).not.toBeNull();
    }));
  });
});
