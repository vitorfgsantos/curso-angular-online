import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaLogadaComponent } from './area-logada.component';

describe('AreaLogadaComponent', () => {
  let component: AreaLogadaComponent;
  let fixture: ComponentFixture<AreaLogadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaLogadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaLogadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
