import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDataBindingComponent } from './exercicio-data-binding.component';

describe('ExercicioDataBindingComponent', () => {
  let component: ExercicioDataBindingComponent;
  let fixture: ComponentFixture<ExercicioDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
