import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEncontreiComponent } from './modal-encontrei.component';

describe('ModalEncontreiComponent', () => {
  let component: ModalEncontreiComponent;
  let fixture: ComponentFixture<ModalEncontreiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEncontreiComponent]
    });
    fixture = TestBed.createComponent(ModalEncontreiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
