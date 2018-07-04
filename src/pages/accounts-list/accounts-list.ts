import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { Account } from '../../models/account';
import { AccountsProvider } from '../../providers/accounts/accounts';

@Component({
  selector: 'accounts-list-home',
  templateUrl: 'accounts-list.html'
})
export class AccountsListPage {

  accounts: Account[];

  constructor(public navCtrl: NavController,
              public clipboard: Clipboard,
              private accountsP: AccountsProvider) {
    this.accounts = [];
  }

  ionViewDidLoad() {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountsP.getAccounts().subscribe(accounts => this.accounts = accounts);
  }

}
