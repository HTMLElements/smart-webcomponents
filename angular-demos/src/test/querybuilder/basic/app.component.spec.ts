import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QueryBuilderModule, QueryBuilderComponent } from 'smart-webcomponents-angular/querybuilder';
import { QueryBuilderTestHarness } from './../../scripts/test.tools';

//Fixture path
import { AppComponent } from './../../../querybuilder/overview/app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let queryBuilderElement: HTMLElement;
  let queryBuilder: QueryBuilderComponent;
  let tools: QueryBuilderTestHarness;

  async function refreshComponent(fixture): Promise<void> {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, QueryBuilderModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    compiled = fixture.nativeElement,
    queryBuilderElement = compiled.querySelector('smart-query-builder'),
    queryBuilder = fixture.componentInstance.querybuilder;

    tools = new QueryBuilderTestHarness();
});

  it('should create the app', () => {
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should render querybuilder', () => {
    const groups = queryBuilderElement.getElementsByClassName('smart-filter-group'),
    conditions = queryBuilderElement.getElementsByClassName('smart-filter-group-condition'),    
    addConditionBtns = queryBuilderElement.getElementsByClassName('smart-filter-add-condition-btn'),
    addBtns = queryBuilderElement.getElementsByClassName('smart-filter-add-btn');

    expect(groups.length).toBe(1);
    expect(conditions.length).toBe(1);
    expect(addConditionBtns.length).toBe(1);
    expect(addBtns.length).toBe(1);
  });

  it('should set properties correctly', () => {
    expect(queryBuilder.allowDrag).toBe(true);
    expect(queryBuilder.showIcons).toBe(false);
    expect(queryBuilder.value).toEqual([]);
    expect(queryBuilder.fields).toEqual([
      { label: 'Id', dataField: 'id', dataType: 'number' },
      { label: 'Product', dataField: 'productName', dataType: 'string' },
      { label: 'Unit Price', dataField: 'price', dataType: 'number' },
      { label: 'Purchased', dataField: 'purchased', dataType: 'datetime' },
      { label: 'Available', dataField: 'available', dataType: 'boolean' }
    ]);
  });

  it('should update properties correctly', () => {
    const conditions = queryBuilderElement.getElementsByClassName('smart-filter-group-condition');

    expect(queryBuilder.value).toEqual([]);
    expect(conditions.length).toBe(1);

    queryBuilder.value = [[['available', '=', true], 'or', ['checked', '<', new Date(2018, 2, 25)]], 'and', [['name', 'contains', 'Evans'], 'or', []]];
    expect(queryBuilder.value).toEqual([[['available', '=', true], 'or', ['checked', '<', 'Sun Mar 25 2018 00:00:00 GMT+0200 (Eastern European Standard Time)']], 'and', [['name', 'contains', 'Evans']]]);
    expect(queryBuilder.fields).toEqual([ { label: 'Id', dataField: 'id', dataType: 'number' }, { label: 'Product', dataField: 'productName', dataType: 'string' }, { label: 'Unit Price', dataField: 'price', dataType: 'number' }, { label: 'Purchased', dataField: 'purchased', dataType: 'datetime' }, { label: 'Available', dataField: 'available', dataType: 'boolean' } ]);

    expect((conditions[0].children[2] as HTMLElement).innerText).toBe('true');
    expect((conditions[2].children[2] as HTMLElement).innerText).toBe('Evans');

    queryBuilder.valueFormatFunction = function (details) {
      if (details.dataField === 'available') {
        return details.value ? '+' : '-';
      }

      return details.value;
    };

    expect((conditions[0].children[2] as HTMLElement).innerText).toBe('+');
    expect((conditions[2].children[2] as HTMLElement).innerText).toBe('Evans');
    expect((conditions[3].children[0] as HTMLElement).innerText).toBe('Property');
    expect((conditions[3].children[1] as HTMLElement).innerText).toBe('Operator');
    expect((conditions[3].children[2] as HTMLElement).innerText).toBe('Value');

    queryBuilder.propertyPlaceholder = 'Field';
    queryBuilder.operatorPlaceholder = 'Comparison type';
    queryBuilder.valuePlaceholder = 'Compare by';
    expect((conditions[3].children[0] as HTMLElement).innerText).toBe('Field');
    expect((conditions[3].children[1] as HTMLElement).innerText).toBe('Comparison type');
    expect((conditions[3].children[2] as HTMLElement).innerText).toBe('Compare by');

    queryBuilder.fields = [{ label: 'Available', dataField: 'available', dataType: 'boolean' }, { label: 'Name', dataField: 'name', dataType: 'string' }, { label: 'Plane No', dataField: 'no', dataType: 'number' }, { label: 'Arrival', dataField: 'arrival', dataType: 'datetime' }];
    expect(queryBuilder.fields.length).toBe(4);
  });

  it('should use custom operators when provided', async () => {
    queryBuilder.customOperations = [
      { label: 'Matches /^\d{7}$/g', name: '/^\d{7}$/g', hideValue: true },
      { label: 'Is valid', name: 'isvalid' }
    ];
    queryBuilder.fields[1].filterOperations = [ '/^\d{7}$/g', 'isvalid' ];
    queryBuilder.value = [
      [
          ['productName', 'isvalid', true]
      ]
    ];

    tools.openConditionDropDown();
    await refreshComponent(fixture);

    const menuItems = tools.getMenuItems();

    expect((menuItems[0] as HTMLElement).innerText).toBe('Matches /^d{7}$/g');
    expect((menuItems[1] as HTMLElement).innerText).toBe('Is valid');
  });

  it('should display icons when showIcons is set to true', async () => {
    queryBuilder.showIcons = true;
    queryBuilder.value = [
      [
          ['productName', '<>', 'Monitors'],
          'or',
          ['productName', 'isblank']
      ]
    ];

    tools.openConditionDropDown();
    await refreshComponent(fixture);

    const menuItems = tools.getMenuItems();
    expect(menuItems[0].querySelector('a')).toHaveClass('icon');
  });
});
