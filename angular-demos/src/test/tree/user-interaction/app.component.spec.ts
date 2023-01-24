import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TreeModule, TreeComponent } from 'smart-webcomponents-angular/tree';
import { TreeTestHarness } from './../../scripts/test.tools';

//Fixture path
import { AppComponent } from './../../../tree/overview/app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let treeElement: HTMLElement
  let tree: TreeComponent;
  let tools: TreeTestHarness;

  async function refreshComponent(fixture): Promise<void> {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, TreeModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    compiled = fixture.nativeElement;
    treeElement = compiled.querySelector('smart-tree');
    tree = fixture.componentInstance.tree;

    tools = new TreeTestHarness();
  });

  afterEach(() => {
    //Destroy the fixture to make sure that everything is clean
    fixture.destroy();
  });

  // expand/collapse
  it('should expand items group on arrow click', () => {
    tools.expandItemsGroup();

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect(itemsGroups[0]).toHaveClass('smart-tree-items-group-opened');
    expect(itemsGroups[0]).toHaveClass('smart-tree-items-group-expanded');
    expect(itemsGroups[0].hasAttribute('expanded')).toBeTrue();
  });

  it('should expand items group on click when toggle mode "click" is set', () => {
    tree.toggleMode = 'click';

    tools.clickItemsGroup();

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect(itemsGroups[0]).toHaveClass('smart-tree-items-group-opened');
    expect(itemsGroups[0]).toHaveClass('smart-tree-items-group-expanded');
    expect(itemsGroups[0].hasAttribute('expanded')).toBeTrue();
  });

  it('should not expand items group on click when toggle mode "arrow" is set', () => {
    tree.toggleMode = 'arrow';

    tools.clickItemsGroup();

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect(itemsGroups[0]).not.toHaveClass('smart-tree-items-group-opened');
    expect(itemsGroups[0]).not.toHaveClass('smart-tree-items-group-expanded');
    expect(itemsGroups[0].hasAttribute('expanded')).toBeFalse();
  });

  it('should not expand items group on double click when toggle mode "arrow" is set', () => {
    tree.toggleMode = 'arrow';

    tools.dblClickItemsGroup();

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect(itemsGroups[0]).not.toHaveClass('smart-tree-items-group-opened');
    expect(itemsGroups[0]).not.toHaveClass('smart-tree-items-group-expanded');
    expect(itemsGroups[0].hasAttribute('expanded')).toBeFalse();
  });

  it('should collapse items group on double click when toggle mode "click" is set', () => {
    tree.toggleMode = 'click';

    tools.dblClickItemsGroup();

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect(itemsGroups[0]).not.toHaveClass('smart-tree-items-group-opened');
    expect(itemsGroups[0].hasAttribute('expanded')).toBeFalse();
  });

  it('should not expand items group on click when toggle mode "dblclick" is set', () => {
    tree.toggleMode = 'dblclick';

    tools.clickItemsGroup();

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect(itemsGroups[0]).not.toHaveClass('smart-tree-items-group-opened');
    expect(itemsGroups[0]).not.toHaveClass('smart-tree-items-group-expanded');
    expect(itemsGroups[0].hasAttribute('expanded')).toBeFalse();
  });

  it('should expand items group on double click when toggle mode "dblclick" is set', () => {
    tree.toggleMode = 'dblclick';

    tools.dblClickItemsGroup();

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect(itemsGroups[0]).toHaveClass('smart-tree-items-group-opened');
    expect(itemsGroups[0]).toHaveClass('smart-tree-items-group-expanded');
    expect(itemsGroups[0].hasAttribute('expanded')).toBeTrue();
  });

  it('should collapse items group on arrow click', () => {
    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    tools.expandItemsGroup();
    expect(itemsGroups[0]).toHaveClass('smart-tree-items-group-opened');
    expect(itemsGroups[0]).toHaveClass('smart-tree-items-group-expanded');
    expect(itemsGroups[0].hasAttribute('expanded')).toBeTrue();

    tools.collapseItemsGroup();
    expect(itemsGroups[0]).not.toHaveClass('smart-tree-items-group-opened');
    expect(itemsGroups[0].hasAttribute('expanded')).toBeFalse();
  });

  // dragging
  it('should reorder items groups on dragging', () => {
    tree.allowDrag = true;
    tree.allowDrop = true;

    tools.dragItem();

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect((itemsGroups[0] as HTMLElement).innerText).toContain('Dining');
    expect((itemsGroups[1] as HTMLElement).innerText).toContain('Attractions');
  });

  it('should add item in another items group on dragging', () => {
    tree.allowDrag = true;
    tree.allowDrop = true;

    tools.dragItemIntoGroup();

    const firstItemsGroup = treeElement.querySelector('smart-tree-items-group');
    const movedItem = firstItemsGroup.querySelector('smart-tree-items-group') as any;

    expect(movedItem).not.toBeNull();
    expect(movedItem.label).toContain('Attractions');
  });

  // filter
  it('should filter correctly when filter value is typed', async () => {
    tree.filterable = true;

    tools.enterFilterValue('Dining');

    await fixture.detectChanges();
    // await refreshComponent(fixture);
    //setTimeout(() => {

    // expect(treeElement.hasAttribute('filter-applied')).toBeTrue();
    const filteredItems = document.querySelectorAll('smart-tree-items-group:not(  [type="hidden"])');
    // expect(filteredItems.length).toBe(1);
    // }, 600);
  });

  // selection
  it('should select item on click', () => {
    tools.selectItem(1);

    expect(tree.selectedIndexes).toEqual(['1']);
  });

  it('should not select item on click if selection mode "none" is set', () => {
    tree.selectionMode = 'none';
    tree.selectedIndexes = [];

    tools.selectItem(1);

    expect(tree.selectedIndexes).toEqual([]);
  });

  it('should select multiple items on multiple clicks', () => {
    tree.selectionMode = 'zeroOrMany';
    tree.selectedIndexes = [];

    tools.selectItems();

    expect(tree.selectedIndexes).toEqual(['1', '2']);
  });

  it('should select one item on multiple clicks when selection mode "zeroOrOne" is set', () => {
    tree.selectionMode = 'zeroOrOne';
    tree.selectedIndexes = [];

    tools.selectItems();

    expect(tree.selectedIndexes).toEqual(['2']);
  });

  it('should select one item on multiple clicks when selection mode "radioButton" is set', () => {
    tree.selectionMode = 'radioButton';
    tree.selectedIndexes = [];

    tools.selectItems();

    const expectedSelectedIndexes = ['2'];
    const itemGroups = treeElement.querySelectorAll('smart-tree-items-group');
    for (let i = 0; i < itemGroups.length; i++) {
      expectedSelectedIndexes.push(i + '.0');
    }

    expectedSelectedIndexes.sort((a, b) => Number(a) - Number(b));

    expect(tree.selectedIndexes).toEqual(expectedSelectedIndexes);
  });

  it('should select one item on multiple clicks when selectionMode "one" is set', () => {
    tree.selectedIndexes = [];

    tools.selectItems();

    expect(tree.selectedIndexes).toEqual(['2']);
  });

  it('should select all item group items on checkbox click when "hasThreeStates" is set', () => {
    tree.selectionMode = 'checkBox';
    tree.selectedIndexes = [];
    tree.hasThreeStates = true;

    tools.selectItem(0);

    expect(tree.selectedIndexes).toEqual(['0', '0.0', '0.1', '0.2', '0.3']);
  });

  // editing
  it('should start editing on item double click', () => {
    tree.editable = true;

    tools.dblClickItemsGroup();

    const editInput = treeElement.querySelector('.smart-tree-edit-input');

    expect(editInput).not.toHaveClass('smart-hidden');
  });

  it('should start editing on F2 pressed', () => {
    tree.editable = true;

    tools.triggerF2();

    const editInput = treeElement.querySelector('.smart-tree-edit-input');

    expect(editInput).not.toHaveClass('smart-hidden');
  });

  it('should update item value on editing', async () => {
    tree.editable = true;

    tools.updateValue();

    const firstItem = await tree.getItem(0);

    expect(firstItem.label).toBe('Updated value');
  });
});
