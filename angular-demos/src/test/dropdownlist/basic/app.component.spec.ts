import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DropDownListModule, DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';

//Fixture path
import { AppComponent } from './../../../dropdownlist/basic/app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let dropDownListElement: HTMLElement;
  let dropDownList: DropDownListComponent;

  async function refreshComponent(fixture): Promise<void> {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, DropDownListModule
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
    dropDownListElement = compiled.querySelector('smart-drop-down-list');
    dropDownList = fixture.componentInstance.dropdownlist;
  });

  afterEach(() => {
    //Destroy the fixture to make sure that everything is clean
    fixture.destroy();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should render dropdownlist', () => {
    expect(dropDownListElement).not.toBeNull();
    expect(dropDownListElement).toHaveClass('smart-drop-down-list');
  });

  it('should render dropdownbutton', () => {
    const dropDownButton = dropDownListElement.getElementsByClassName('smart-drop-down-button');

    expect(dropDownButton).not.toBeNull();
  });

  it('should render dropdown container', () => {
    const dropDownContainer = dropDownListElement.getElementsByClassName('smart-drop-down-container');

    expect(dropDownContainer).not.toBeNull();
  });
});