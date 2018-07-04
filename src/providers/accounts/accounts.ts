import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Account } from '../../models/account';

@Injectable()
export class AccountsProvider {

  constructor(private http: HttpClient) {
  }

  getAccounts(): Observable<Account[]> {
    return new Observable(observer => {
      this.http.get<Account[]>("assets/data/accounts.json").subscribe(accountsJSON => {
        let accounts: Account[] = [];
        for(let account of accountsJSON) {
          accounts.push(new Account(account.account, account.password, account.site, account.description, account.icon));
        }
        observer.next(accounts);
        observer.complete();
      });
    });
  }

}
