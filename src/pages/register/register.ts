import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user={} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireAuth: AngularFireAuth ) {
  }

  //funcion de conexion

  async register(user:User){
    const result=this.angularFireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
    console.log(result);
  }
  catch (e){
    console.error(e);
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }*/

}
