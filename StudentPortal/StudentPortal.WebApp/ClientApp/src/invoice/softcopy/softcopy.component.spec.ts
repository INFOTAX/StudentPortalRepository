import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftcopyComponent } from './softcopy.component';

describe('SoftcopyComponent', () => {
  let component: SoftcopyComponent;
  let fixture: ComponentFixture<SoftcopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftcopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
