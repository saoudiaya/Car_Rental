import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowCarsPage } from './show-cars';

@NgModule({
  declarations: [
    ShowCarsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowCarsPage),
  ],
})
export class ShowCarsPageModule {}
