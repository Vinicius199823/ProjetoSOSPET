import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPetComponent } from './cadastra-pet.component';

describe('CadastraPetComponent', () => {
  let component: CadastraPetComponent;
  let fixture: ComponentFixture<CadastraPetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastraPetComponent]
    });
    fixture = TestBed.createComponent(CadastraPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
