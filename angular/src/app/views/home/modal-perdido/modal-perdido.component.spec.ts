import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPerdidoComponent } from './modal-perdido.component';

describe('ModalPerdidoComponent', () => {
  let component: ModalPerdidoComponent;
  let fixture: ComponentFixture<ModalPerdidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPerdidoComponent]
    });
    fixture = TestBed.createComponent(ModalPerdidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
