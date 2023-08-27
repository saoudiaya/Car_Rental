import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersStatsPage } from './users-stats';

@NgModule({
  declarations: [
    UsersStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersStatsPage),
  ],
})
export class UsersStatsPageModule {}
