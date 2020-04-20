import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContatoComponent } from './editar-contato.component';

describe('EditarContatoComponent', () => {
  let component: EditarContatoComponent;
  let fixture: ComponentFixture<EditarContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
