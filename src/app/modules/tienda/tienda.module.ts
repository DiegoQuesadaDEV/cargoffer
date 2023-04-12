import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { PanelComponent } from './pages/panel/panel.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';


@NgModule({
  declarations: [
    ProductosComponent,
    PanelComponent,
    AgregarProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    TiendaRoutingModule
  ]
})
export class TiendaModule { }
