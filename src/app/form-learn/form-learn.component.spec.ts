import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLearnComponent } from './form-learn.component';

describe('FormLearnComponent', () => {
  let component: FormLearnComponent;
  let fixture: ComponentFixture<FormLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
