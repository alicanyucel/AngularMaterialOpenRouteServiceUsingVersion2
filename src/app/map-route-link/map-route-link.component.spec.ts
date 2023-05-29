import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRouteLinkComponent } from './map-route-link.component';

describe('MapRouteLinkComponent', () => {
  let component: MapRouteLinkComponent;
  let fixture: ComponentFixture<MapRouteLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapRouteLinkComponent]
    });
    fixture = TestBed.createComponent(MapRouteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
