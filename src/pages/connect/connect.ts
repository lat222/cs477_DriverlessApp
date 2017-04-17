import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ConnectPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html'
})
export class ConnectPage {

  vehicle = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectPagePage');
  }

  logForm() {
    console.log(this.vehicle);
  }

}
