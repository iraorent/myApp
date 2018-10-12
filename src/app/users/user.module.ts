import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { UserCreateComponent } from "./user-create/user-create.component";
import { UserListComponent } from "./user-list/user-list.component";

import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [UserCreateComponent, UserListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    UserRoutingModule
  ]
})
export class UserModule {}
