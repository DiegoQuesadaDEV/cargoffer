import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  miFormulario!: FormGroup;

  tituloProducto: string = '';
  descripcionProducto: string = '';
  formInvalid: boolean = false;

  constructor(
    public tiendaService: TiendaService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      titulo: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

  }

  submitForm() {
    if (this.miFormulario.invalid) {
      this.formInvalid = true;
      return;
    }
    const nuevoProducto = this.miFormulario.value;
    
    this.tiendaService.createProducto( nuevoProducto ).subscribe(
      resp => {
        this.formInvalid = false;
        this.tiendaService.agregarProducto = false;
        this.tiendaService.getProductos()
         .subscribe( productos => this.tiendaService.productos = productos )
      }
    )

  }

}
