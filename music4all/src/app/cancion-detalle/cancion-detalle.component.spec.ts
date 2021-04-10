import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionDetalleComponent } from './cancion-detalle.component';

describe('CancionDetalleComponent', () => {
  let component: CancionDetalleComponent;
  let fixture: ComponentFixture<CancionDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
