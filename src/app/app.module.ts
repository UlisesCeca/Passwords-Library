import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AccountsListPage } from '../pages/accounts-list/accounts-list';
import { Clipboard } from '@ionic-native/clipboard';
import { AccountsProvider } from '../providers/accounts/accounts';

@NgModule({
  declarations: [
    MyApp,
    AccountsListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "ios"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountsListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Clipboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountsProvider
  ]
})
export class AppModule {}
