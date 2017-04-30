import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Global } from '../../services/global/global';

/**
 * Generated class for the AddItem page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItem {

	dcSysSize : any;
	modType : any;
	arrType : any;
	sysLoss : any;
	tilt : any;
	azimuth : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: Global) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItem');
  }

  submitItem() {
  	var obj = {
  		"dcSysSize": this.dcSysSize,
  		"modType": this.modType,
  		"arrType": this.arrType,
  		"sysLoss": this.sysLoss,
  		"tilt": this.tilt,
  		"azimuth": this.azimuth
  	};
  	console.log(obj);
  	// this.global.items.push(obj);
  	// this.navCtrl.pop();
  }

}
