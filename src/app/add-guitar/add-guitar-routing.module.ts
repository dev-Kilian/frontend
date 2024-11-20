import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGuitarPage } from './add-guitar.page';

const routes: Routes = [
  {
    path: '',
    component: AddGuitarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddGuitarPageRoutingModule {}
