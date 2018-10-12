import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserCreateComponent } from "./user-create/user-create.component";
import { UserListComponent } from "./user-list/user-list.component";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  { path: "users/lists", component: UserListComponent },
  { path: "users/create", component: UserCreateComponent, canActivate: [AuthGuard] },
  { path: "users/edit/:userId", component: UserCreateComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
