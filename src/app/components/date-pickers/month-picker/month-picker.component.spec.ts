import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPickerComponent } from './month-picker.component';

describe('MonthPickerComponent', () => {
  let component: MonthPickerComponent;
  let fixture: ComponentFixture<MonthPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthPickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
