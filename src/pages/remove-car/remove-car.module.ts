import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemoveCarPage } from './remove-car';

@NgModule({
  declarations: [
    RemoveCarPage,
  ],
  imports: [
    IonicPageModule.forChild(RemoveCarPage),
  ],
})
export class RemoveCarPageModule {}
