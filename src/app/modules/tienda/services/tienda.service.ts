import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private baseUrl: string = environment.baseUrl;

  productos: Producto[] = [];
  agregarProducto: boolean = false;
  editarProducto: boolean = false;
  productoSeleccionado: string = '';

  constructor(
    private _http: HttpClient
  ) { }

  getProductos(): Observable<Producto[]> {
    return this._http.get<Producto[]>(`${this.baseUrl}/productos`);
  }

  getProductoId(id: string): Observable<Producto> {
    return this._http.get<Producto>(`${this.baseUrl}/productos/${id}`);
  }

  createProducto( producto: Producto ): Observable<Producto> {
    return this._http.post<Producto>(`${this.baseUrl}/productos`, producto);
  }

  updateProducto( producto: Producto ): Observable<Producto> {
    return this._http.put<Producto>(`${this.baseUrl}/productos/${producto.id}`, producto);
  }

  deleteProducto(id: string): Observable <any> {
    return this._http.delete<any>(`${this.baseUrl}/productos/${id}`);
  }

}
