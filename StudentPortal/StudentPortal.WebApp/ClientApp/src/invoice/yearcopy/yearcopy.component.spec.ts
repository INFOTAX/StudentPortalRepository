import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearcopyComponent } from './yearcopy.component';

describe('YearcopyComponent', () => {
  let component: YearcopyComponent;
  let fixture: ComponentFixture<YearcopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearcopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
