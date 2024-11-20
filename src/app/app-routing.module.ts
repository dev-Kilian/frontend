import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-guitars',
    loadChildren: () => import('./my-guitars/my-guitars.module').then( m => m.MyGuitarsPageModule)
  },
  {
    path: 'add-guitar',
    loadChildren: () => import('./add-guitar/add-guitar.module').then( m => m.AddGuitarPageModule)
  },
  {
    path: 'edit-guitar/:id',
    loadChildren: () => import('./edit-guitar/edit-guitar.module').then(m => m.EditGuitarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
