import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  exports: [
    ButtonModule,
    RippleModule,
    CardModule,
    InputTextareaModule,
    InputTextModule,
    ConfirmDialogModule,
    ChipModule,
    TableModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
