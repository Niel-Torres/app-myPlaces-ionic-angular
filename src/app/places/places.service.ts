import { Injectable } from '@angular/core';
import {Place} from './place.model';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel tower',
      imageURL: 'https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id: '2',
      title: 'Statue of liberty',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id: '3',
      title: 'Awesome place',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      comments: []
    }
  ];

  constructor() { }

  getPlaces(){
    return [...this.places];

  }

  getPlace(placeId: string){
    const found = this.places.find(place => place.id === placeId);
    return found;
  }

  addPlace(title: string, imageURL: string){
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ''
    });
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => place.id !==placeId);

  }


}
