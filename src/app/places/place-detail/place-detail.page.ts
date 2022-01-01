import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alertCtrl: AlertController

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // redirect
      const recipeId = paramMap.get('placeId');
      this.place = this.placesService.getPlace(recipeId);
      console.log(this.place);
    });
  }

  async deletePlace(){
    // this.placesService.deletePlace(this.place.id);
    // this.router.navigate(['/places']);

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Are you sure, you want delete it?',
      message: 'Be careful',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places']);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }



}
