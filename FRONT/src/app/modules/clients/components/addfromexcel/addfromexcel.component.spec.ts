import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfromexcelComponent } from './addfromexcel.component';

describe('AddfromexcelComponent', () => {
  let component: AddfromexcelComponent;
  let fixture: ComponentFixture<AddfromexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfromexcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfromexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
