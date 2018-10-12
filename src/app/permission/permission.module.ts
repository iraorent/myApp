import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { PermissionCreateComponent } from "./permission-create/permission-create.component";
import { PermissionListComponent } from "./permission-list/permission-list.component";

import { PermissionRoutingModule } from "./permission-routing.module";

@NgModule({
  declarations: [PermissionCreateComponent, PermissionListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    PermissionRoutingModule
  ]
})
export class PermissionModule {}
