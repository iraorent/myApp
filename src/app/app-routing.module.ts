import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "homes", loadChildren: "./home/home.module#HomeModule" },
  { path: "posts", loadChildren: "./posts/posts.module#PostsModule" },
  { path: "roles", loadChildren: "./roles/role.module#RoleModule" },
  { path: "permissions", loadChildren: "./permission/permission.module#PermissionModule" },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
