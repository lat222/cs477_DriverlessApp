import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MapPage } from '../map/map';

/*
  Generated class for the NavigationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',

})
export class NavigationPage {

  dest = {};
  vehicle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.vehicle = "roller";
  }

  getSelectedController(event){
    console.log(this.vehicle);
  }

  logForm() {
    console.log(this.dest);
    this.navCtrl.push(MapPage,{
    	destination: this.dest["title"],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

}
