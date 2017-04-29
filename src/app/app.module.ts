import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Item } from '../pages/item/item';
import { AddItem } from '../pages/add-item/add-item';
import { CountForm } from '../pages/count-form/count-form';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ApiService } from '../providers/api-service';
import { HttpModule } from '@angular/http';
import { Global } from '../services/global/global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Login,
    AddItem,
    Item,
    CountForm
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Item,
    CountForm,
    AddItem,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Global,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiService  ]
})
export class AppModule {}
