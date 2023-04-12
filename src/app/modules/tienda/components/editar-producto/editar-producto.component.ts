import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  miFormulario!: FormGroup;

  tituloProducto: string = '';
  descripcionProducto: string = '';
  formInvalid: boolean = false;
  productoSeleccionado!: Producto;

  constructor(
    public tiendaService: TiendaService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      id: [''],
      titulo: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

    this.tiendaService.getProductoId(this.tiendaService.productoSeleccionado)
      .subscribe(resp => {
        this.miFormulario.patchValue(resp);
        this.productoSeleccionado = resp;
      });

  }

  submitForm() {
    if (this.miFormulario.invalid) {
      this.formInvalid = true;
      return;
    }
    this.productoSeleccionado = this.miFormulario.value;
    console.log(this.productoSeleccionado);
    
    
    this.tiendaService.updateProducto( this.productoSeleccionado )
      .subscribe( resp => {
        this.formInvalid = false;
        this.tiendaService.editarProducto = false;
        this.tiendaService.getProductos()
         .subscribe( productos => this.tiendaService.productos = productos )
      } )

  }

}
