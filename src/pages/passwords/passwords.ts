import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'passwords-home',
  templateUrl: 'passwords.html'
})
export class PasswordsPage {

  constructor(public navCtrl: NavController,
              private clipboard: Clipboard) {

  }

  prueba(): void {
    this.clipboard.copy("password");
  }

}
