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

  afterEach(() => {
    const feedbackElement = document.querySelector('div.smart-query-builder-drag-feedback');

    if (feedbackElement) {
      feedbackElement.parentElement.removeChild(feedbackElement);
    }

    //Destroy the fixture to make sure that everything is clean
    fixture.destroy();
  });

  it('should add filter on add button click', () => {
    queryBuilder.value = [[['productName', 'isblank']]];

    tools.addFilter();

    expect(queryBuilder.value[0].length).toBe(3);
  });

  it('should add filter group on add button click', () => {
    queryBuilder.value = [[['productName', 'isblank']]];

    tools.addFilterGroup();

    //expect(queryBuilderElement.value[0].length).toBe(3);
  });

  it('should remove fields on close button click', () => {
    queryBuilder.value = [
      [
        ['purchased', '=', new Date(2019, 0, 4)],
        'and',
        ['productName', '<>', 'Monitors'],
        'or',
        ['productName', 'isblank']
      ]
    ];

    tools.removeField();

    expect(queryBuilder.value[0].length).toBe(3);
  });

  it('should create feedback element on dragging start', () => {
    queryBuilder.value = [
      [
        ['productName', '<>', 'Monitors'],
        'or',
        ['productName', 'isblank']
      ]
    ];

    tools.startDragging();

    const feedbackElement = document.querySelector('div.smart-query-builder-drag-feedback');

    expect(feedbackElement).not.toBeNull();
  });

  it('should mark the target condition as dragged on dragging start', () => {
    queryBuilder.value = [
      [
        ['productName', '<>', 'Monitors'],
        'or',
        ['productName', 'isblank']
      ]
    ];

    tools.startDragging();

    const dragTarget = document.querySelector('.smart-filter-group-condition');

    expect(dragTarget).toHaveClass('dragged');
  });

  it('should set attribute "dragging" to query-builder on dragging start', () => {
    queryBuilder.value = [
      [
        ['productName', '<>', 'Monitors'],
        'or',
        ['productName', 'isblank']
      ]
    ];

    tools.startDragging();

    expect(queryBuilderElement.hasAttribute('dragging')).toBeTrue();
  });

  it('should mark drag target when hovered while dragging', () => {
    queryBuilder.value = [
      [
        ['productName', '<>', 'Monitors'],
        'or',
        ['productName', 'isblank']
      ]
    ];

    tools.dragToDropTarget();

    const filterConditions = document.querySelectorAll('.smart-filter-group-condition');
    expect((filterConditions[1])).toHaveClass('drop-target');
  });

  it('should reorder filters on dragging', () => {
    queryBuilder.value = [
      [
        ['productName', '<>', 'Monitors'],
        'or',
        ['productName', 'isblank']
      ]
    ];

    tools.dragField();

    expect(queryBuilder.value[0][0]).toEqual(['productName', 'isblank']);
    expect(queryBuilder.value[0][2]).toEqual(["productName", "<>", "Monitors"]);
  });

  it('should remove feedback element on dragging end', () => {
    queryBuilder.value = [
      [
        ['productName', '<>', 'Monitors'],
        'or',
        ['productName', 'isblank']
      ]
    ];

    tools.dragField();

    const feedbackElement = document.querySelector('div.smart-query-builder-drag-feedback');
    expect(feedbackElement).toBeNull();
  });

  it('should unmark the target condition as dragged on dragging end', () => {
    queryBuilder.value = [
      [
        ['productName', '<>', 'Monitors'],
        'or',
        ['productName', 'isblank']
      ]
    ];

    tools.dragField();

    const dragTarget = document.querySelector('.smart-filter-group-condition');

    expect(dragTarget).not.toHaveClass('dragged');
  });

  it('should remove attribute "dragging" to query-builder on dragging start', () => {
    queryBuilder.value = [
      [
        ['productName', '<>', 'Monitors'],
        'or',
        ['productName', 'isblank']
      ]
    ];

    tools.dragField();

    expect(queryBuilderElement.hasAttribute('dragging')).toBeFalse();
  });
});
