import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HistoryPage } from '../history/history';
import { NavigationPage } from '../navigation/navigation';
import { ConnectPage } from '../connect/connect';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  navPage = NavigationPage;
  cPage = ConnectPage;
  hPage = HistoryPage;


  constructor(public navCtrl: NavController) {
  	
  }

}
