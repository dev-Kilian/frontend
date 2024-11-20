import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyGuitarsPageRoutingModule } from './my-guitars-routing.module';

import { MyGuitarsPage } from './my-guitars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyGuitarsPageRoutingModule
  ],
  declarations: [MyGuitarsPage]
})
export class MyGuitarsPageModule {}
