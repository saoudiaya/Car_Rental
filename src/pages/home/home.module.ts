import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
   CommonModule,
   FormsModule,
   IonicModule,
  ],
})
export class HomePageModule {}
