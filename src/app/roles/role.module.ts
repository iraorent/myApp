import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RoleCreateComponent } from "./role-create/role-create.component";
import { RoleListComponent } from "./role-list/role-list.component";

import { RoleRoutingModule } from "./role-routing.module";

@NgModule({
  declarations: [RoleCreateComponent, RoleListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RoleRoutingModule
  ]
})
export class RoleModule {}
