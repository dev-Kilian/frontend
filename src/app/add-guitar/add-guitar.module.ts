import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddGuitarPageRoutingModule } from './add-guitar-routing.module';
import { AddGuitarPage } from './add-guitar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddGuitarPageRoutingModule
  ],
  declarations: [AddGuitarPage]
})
export class AddGuitarPageModule {}
