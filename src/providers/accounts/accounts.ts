import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountsProvider {

  constructor(public http: HttpClient) {
  }

}
