import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoContatoComponent } from './novo-contato.component';

describe('NovoContatoComponent', () => {
  let component: NovoContatoComponent;
  let fixture: ComponentFixture<NovoContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
