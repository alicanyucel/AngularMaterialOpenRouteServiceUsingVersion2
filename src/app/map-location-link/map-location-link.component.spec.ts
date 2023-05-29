import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLocationLinkComponent } from './map-location-link.component';

describe('MapLocationLinkComponent', () => {
  let component: MapLocationLinkComponent;
  let fixture: ComponentFixture<MapLocationLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapLocationLinkComponent]
    });
    fixture = TestBed.createComponent(MapLocationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
