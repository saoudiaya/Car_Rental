import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
import {CardPage} from '../pages/card/card';
import {PersonPage} from '../pages/person/person';
import {SearchPage} from '../pages/search/search';
import {DetailsPage} from '../pages/details/details';
import {FilterPipe} from '../pipes/filter/filter';
import {IonicStorageModule} from '@ionic/storage';
import {UserService} from '../services/UserService';
import {CarService} from '../services/CarService';
import {CartService} from '../services/CartService';
import {OrderPage} from '../pages/order/order';
import {RecuPage} from '../pages/recu/recu';
import {OrderService} from '../services/OrderService';
import {AdminLoginPage} from "../pages/admin-login/admin-login";
import {AdminHomePage} from "../pages/admin-home/admin-home";
import {AddCarPage} from "../pages/add-car/add-car";
import {ShowCarsPage} from "../pages/show-cars/show-cars";
import {RemoveCarPage} from "../pages/remove-car/remove-car";
import {UpdateCarPage} from "../pages/update-car/update-car";
import {UsersStatsPage} from "../pages/users-stats/users-stats";
import {CarChartPage} from "../pages/car-chart/car-chart";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    CardPage,
    PersonPage,
    SearchPage,
    DetailsPage,
    FilterPipe,
    OrderPage,
    RecuPage,
    AdminLoginPage
    , AdminHomePage, AddCarPage, ShowCarsPage, RemoveCarPage, UpdateCarPage, UsersStatsPage,
    CarChartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    CardPage,
    PersonPage,
    SearchPage,
    DetailsPage,
    OrderPage,
    RecuPage,
    AdminLoginPage,
    AdminHomePage, AddCarPage, ShowCarsPage, RemoveCarPage, UpdateCarPage, UsersStatsPage,
    CarChartPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    CarService,
    CartService,

    OrderService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
