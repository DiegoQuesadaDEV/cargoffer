import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { TiendaService } from '../../services/tienda.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  busqueda: string = '';

  constructor(
    public tiendaService: TiendaService,
  ) { }


  ngOnInit(): void {
    this.tiendaService.getProductos()
      .subscribe( productos => this.tiendaService.productos = productos )
  }

  // Filtro como ejemplo en el front, aunque se que lo ideal seria filtrar desde el propio backend.
  // Lo hago asi como ejemplo ya que la prueba no pide una creación de una api, solo su uso desde el front
  filtrarProductos() {
    return this.tiendaService.productos.filter((busqueda) => {
      return busqueda.titulo.toLowerCase().includes(this.busqueda.toLowerCase());
    })
  }

  editarProducto(id: string) {
    this.tiendaService.editarProducto = true;
    this.tiendaService.productoSeleccionado = id;
  }

  borrarProducto(id: string) {
    this.tiendaService.deleteProducto(id)
      .subscribe( resp => {
        this.tiendaService.getProductos()
      .subscribe( productos => this.tiendaService.productos = productos );
      }
      );
  }

}
