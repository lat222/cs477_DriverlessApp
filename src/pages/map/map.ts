import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MapPAge page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

	public dest: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.dest = navParams.get("destination");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
