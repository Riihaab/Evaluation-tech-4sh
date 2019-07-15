import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSortieComponent } from './form-sortie.component';

describe('FormSortieComponent', () => {
  let component: FormSortieComponent;
  let fixture: ComponentFixture<FormSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
