import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhycopyComponent } from './phycopy.component';

describe('PhycopyComponent', () => {
  let component: PhycopyComponent;
  let fixture: ComponentFixture<PhycopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhycopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhycopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
