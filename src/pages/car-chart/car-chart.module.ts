import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarChartPage } from './car-chart';

@NgModule({
  declarations: [
    CarChartPage,
  ],
  imports: [
    IonicPageModule.forChild(CarChartPage),
  ],
})
export class CarChartPageModule {}
