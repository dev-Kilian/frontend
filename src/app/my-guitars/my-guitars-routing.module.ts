import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyGuitarsPage } from './my-guitars.page';

const routes: Routes = [
  {
    path: '',
    component: MyGuitarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyGuitarsPageRoutingModule {}
