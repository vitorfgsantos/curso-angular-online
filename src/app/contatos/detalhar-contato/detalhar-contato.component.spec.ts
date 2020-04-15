import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharContatoComponent } from './detalhar-contato.component';

describe('DetalharContatoComponent', () => {
  let component: DetalharContatoComponent;
  let fixture: ComponentFixture<DetalharContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
