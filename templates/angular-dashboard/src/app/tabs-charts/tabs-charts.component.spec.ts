import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsChartsComponent } from './tabs-charts.component';

describe('TabsChartsComponent', () => {
  let component: TabsChartsComponent;
  let fixture: ComponentFixture<TabsChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
