import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tienda',
    loadChildren: () => import('./modules/tienda/tienda.module').then( m => m.TiendaModule )
  },
  {
    path: '**',
    redirectTo: 'tienda'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
