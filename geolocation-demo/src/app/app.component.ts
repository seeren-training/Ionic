import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewRef } from '@angular/core';

import { Geolocation, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';

// OpenLayers Suck
import { Map } from 'ol';
import { OSM } from 'ol/source.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import { fromLonLat } from '../../node_modules/ol/proj';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('map') private mapContainer: ElementRef;

  private map: Map;

  constructor(private geolocation: Geolocation) { }

  ngAfterViewInit(): void {
    this.geolocation
      .getCurrentPosition()
      .then((position: Geoposition) => this.initMap(position))
      .catch((error: PositionError) => alert(`Error: ${error.message}`));
  }

  initMap(position: Geoposition): Map {
    return this.map = new Map({
      target: this.mapContainer.nativeElement,
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: fromLonLat([position.coords.longitude, position.coords.latitude]),
        zoom: 19
      })
    });
  }

}
