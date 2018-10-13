import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";

import { AgGridModule } from "ag-grid-angular";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HomeRoutingModule,
    AgGridModule.withComponents([HomeComponent])
  ]
})
export class HomeModule {}
