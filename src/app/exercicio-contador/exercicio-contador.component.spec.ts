import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioContadorComponent } from './exercicio-contador.component';

describe('ExercicioContadorComponent', () => {
  let component: ExercicioContadorComponent;
  let fixture: ComponentFixture<ExercicioContadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
