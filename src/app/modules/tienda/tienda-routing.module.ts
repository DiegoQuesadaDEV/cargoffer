import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { PanelComponent } from './pages/panel/panel.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'panel',
        component: PanelComponent
      },
      {
        path: '**',
        redirectTo: 'productos'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
