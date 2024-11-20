import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditGuitarPage } from './edit-guitar.page';

const routes: Routes = [
  {
    path: '',
    component: EditGuitarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditGuitarPageRoutingModule {}
