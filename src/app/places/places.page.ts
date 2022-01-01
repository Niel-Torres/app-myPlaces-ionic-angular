import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = [];

  constructor(
    private placesService: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.places = this.placesService.getPlaces();
  }

  ionViewWillEnter(){
    //recargar contenido si vuelve a la vista
    this.places = this.placesService.getPlaces();
  }

  addNewPlace(){
    this.router.navigate(['/new-place']);
  }

}
