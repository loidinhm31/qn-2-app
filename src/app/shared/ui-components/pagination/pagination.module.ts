import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from "./pagination.component";
import { IonicModule } from "@ionic/angular";



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule { }
