import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDiretivasComponent } from './exercicio-diretivas.component';

describe('ExercicioDiretivasComponent', () => {
  let component: ExercicioDiretivasComponent;
  let fixture: ComponentFixture<ExercicioDiretivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioDiretivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
