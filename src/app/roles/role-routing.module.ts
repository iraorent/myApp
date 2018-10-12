import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RoleCreateComponent } from "./role-create/role-create.component";
import { RoleListComponent } from "./role-list/role-list.component";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  { path: "roles/lists", component: RoleListComponent },
  { path: "roles/create", component: RoleCreateComponent, canActivate: [AuthGuard] },
  { path: "roles/edit/:userId", component: RoleCreateComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoleRoutingModule {}
