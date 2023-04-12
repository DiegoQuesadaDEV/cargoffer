import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];



  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-shopping-cart',
        command:(click)=>{this.router.navigate(['/tienda/productos'])}
      },
      {
        label: 'Panel de control',
        icon: 'pi pi-fw pi-cog',
        command:(click)=>{this.router.navigate(['/tienda/panel'])}
      },
    ];



  }

}
