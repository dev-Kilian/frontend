import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGuitarPageRoutingModule } from './edit-guitar-routing.module';

import { EditGuitarPage } from './edit-guitar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditGuitarPageRoutingModule
  ],
  declarations: [EditGuitarPage]
})
export class EditGuitarPageModule {}
