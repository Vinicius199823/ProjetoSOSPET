import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapapetComponent } from './mapapet.component';

describe('MapapetComponent', () => {
  let component: MapapetComponent;
  let fixture: ComponentFixture<MapapetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapapetComponent]
    });
    fixture = TestBed.createComponent(MapapetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
