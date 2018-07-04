import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'passwords-list-home',
  templateUrl: 'passwords-list.html'
})
export class PasswordsListPage {

  constructor(public navCtrl: NavController,
              private clipboard: Clipboard) {

  }

  prueba(): void {
    this.clipboard.copy("password");
  }

}
