import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PermissionCreateComponent } from "./permission-create/permission-create.component";
import { PermissionListComponent } from "./permission-list/permission-list.component";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  { path: "permissions/lists", component: PermissionListComponent },
  { path: "permissions/create", component: PermissionCreateComponent, canActivate: [AuthGuard] },
  { path: "permissions/edit/:userId", component: PermissionCreateComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PermissionRoutingModule {}
