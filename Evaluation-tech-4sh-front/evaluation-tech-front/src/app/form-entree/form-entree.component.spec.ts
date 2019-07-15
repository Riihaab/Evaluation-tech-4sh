import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEntreeComponent } from './form-entree.component';

describe('FormEntreeComponent', () => {
  let component: FormEntreeComponent;
  let fixture: ComponentFixture<FormEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
