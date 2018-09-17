import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationtopComponent } from './navigationtop.component';

describe('NavigationtopComponent', () => {
  let component: NavigationtopComponent;
  let fixture: ComponentFixture<NavigationtopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationtopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
