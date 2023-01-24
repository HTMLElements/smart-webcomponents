import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TreeModule, TreeComponent } from 'smart-webcomponents-angular/tree';

//Fixture path
import { AppComponent } from './../../../tree/overview/app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let treeElement: HTMLElement;
  let tree: TreeComponent;

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
  });

  afterEach(() => {
    //Destroy the fixture to make sure that everything is clean
    fixture.destroy();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should render tree', () => {
    const itemsGroups = treeElement.getElementsByClassName('smart-tree-items-group');

    expect(treeElement).not.toBeNull();
    expect(itemsGroups.length).toBeGreaterThan(0);
  });

  it('should set single selected item correctly', () => {
    tree.selectedIndexes = ['1'];

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect(itemsGroups[0].hasAttribute('selected')).toBeFalse();
    expect(itemsGroups[1].hasAttribute('selected')).toBeTrue();
    expect(itemsGroups[2].hasAttribute('selected')).toBeFalse();
  });

  it('should set multiple selected items correctly', () => {
    tree.selectionMode = 'zeroOrMany';
    tree.selectedIndexes = ['1', '2'];

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect(itemsGroups[0].hasAttribute('selected')).toBeFalse();
    expect(itemsGroups[1].hasAttribute('selected')).toBeTrue();
    expect(itemsGroups[2].hasAttribute('selected')).toBeTrue();
    expect(itemsGroups[3].hasAttribute('selected')).toBeFalse();
  });

  it('should reorder items when moveDown is called', async () => {
    const item = await tree.getItem(0);
    tree.moveDown(item);

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect((itemsGroups[0] as HTMLElement).innerText).toContain('Dining');
    expect((itemsGroups[1] as HTMLElement).innerText).toContain('Attractions');
  });

  it('should reorder items when moveUp is called', async () => {
    const item = await tree.getItem(1);
    tree.moveUp(item);

    const itemsGroups = treeElement.querySelectorAll('smart-tree-items-group');

    expect((itemsGroups[0] as HTMLElement).innerText).toContain('Dining');
    expect((itemsGroups[1] as HTMLElement).innerText).toContain('Attractions');
  });

  it('should display scrollbar when overflow "scroll" is set', () => {
    tree.overflow = 'scroll';

    const scrollBar = treeElement.querySelector('smart-scroll-bar');

    expect(scrollBar).not.toHaveClass('smart-hidden');
  });

  it('should hide scrollbar when overflow is changed to "hidden"', () => {
    tree.overflow = 'scroll';
    tree.overflow = 'hidden';

    const scrollBar = treeElement.querySelector('smart-scroll-bar');

    expect(scrollBar).toHaveClass('smart-hidden');
  });

  it('should update selection display mode correctly', () => {
    tree.selectionDisplayMode = 'label';

    expect(treeElement.getAttribute('selection-display-mode')).toBe('label');
  });
});
