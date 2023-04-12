import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  busqueda: string = '';

  constructor(
    private tiendaService: TiendaService
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

}
