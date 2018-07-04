import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'accounts-list-home',
  templateUrl: 'accounts-list.html'
})
export class AccountsListPage {

  constructor(public navCtrl: NavController,
              private clipboard: Clipboard) {

  }

  prueba(): void {
    this.clipboard.copy("password");
  }

}
