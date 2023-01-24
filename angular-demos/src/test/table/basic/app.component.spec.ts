import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableModule, TableComponent, Table } from 'smart-webcomponents-angular/table';
import { TestHarness, TableTestHarness } from 'src/test/scripts/test.tools';

//Fixture path
import { AppComponent } from './../../../table/basic/app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, TableModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  let fixture: ComponentFixture<AppComponent>, app: AppComponent, tools: TableTestHarness, component: TableComponent, smartTable: Table;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    component = app.table;
    tools = new TableTestHarness(smartTable);
    fixture.detectChanges();
  });

  afterEach(() => {
    //Destroy the fixture to make sure that everything is clean
    fixture.destroy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement,
      tableElement = compiled.querySelector('smart-table'),
      tableHeaders = tableElement.querySelectorAll('th'),
      tableColumns = tableElement.columns;

    expect(tableElement).not.toBeNull();
    expect(tableElement.rows.length).toBe(10);
    expect(tableColumns.length).toBe(5);
    expect(tableHeaders.length).toBe(5);

    //Check the Table headers content
    for (let i = 0, max = tableHeaders.length; i < max; i += 1) {
      const th = tableHeaders[i];

      if (th.getAttribute('data-field') === 'GDP_Total') {
        expect(th.textContent).toEqual(tableColumns[i].label);
        break;
      }
    }
  });
});
