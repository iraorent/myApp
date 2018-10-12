import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
import { Permission } from "./permission.model";

const BACKEND_URL = environment.apiUrl + "/permissions/";

@Injectable({ providedIn: "root" })
export class PermissionService {
  private permissions: Permission[] = [];
  private permissionsUpdated = new Subject<{ permissions: Permission[]; permissionCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  
  getPermissions(permissionsPerPage: number, currentPage: number) {
    debugger
    const queryParams = `?pagesize=${permissionsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; permissions: any; maxPermissions: number }>(
        BACKEND_URL + queryParams
      )
      .pipe(
        map(permissionData => {
          return {
            permissions: permissionData.permissions.map(permission => {
              return {
                id: permission._id,
                module: permission.module,
                name: permission.name,
                description: permission.description,
                creator: permission.creator
              };
            }),
            maxPermissions: permissionData.maxPermissions
          };
        })
      )
      .subscribe(transformedPermissionData => {
        this.permissions = transformedPermissionData.permissions;
        this.permissionsUpdated.next({
          permissions: [...this.permissions],
          permissionCount: transformedPermissionData.maxPermissions
        });
      });
  }

  getPermissionUpdateListener() {
    debugger
    return this.permissionsUpdated.asObservable();
  }

  getPermission(id: string) {
    return this.http.get<{
      _id: string;
      module: string;
      name: string;
      description: string;
      creator: string;
    }>(BACKEND_URL + id);
  }


  addPermission(module: string, name: string, description: string) {
  
    debugger
    var permissionData;

    permissionData = {
      module: module,
      name: name,
      description: description,
      creator:null
    };

    this.http
      .post<{ message: string; permission: Permission }>(
        BACKEND_URL,
        permissionData
      )
      .subscribe(responseData => {
        debugger
        this.router.navigate(["/"]);
      });
  }

  updatePermission(id: string, module: string, name: string, description: string) {
    let permissionData: Permission | FormData;

    permissionData = {
      id: id,
      module: module,
      name: name,
      description: description,
      creator:null
    };

    this.http
      .put(BACKEND_URL + id, permissionData)
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
  }

  deletePermission(permissionId: string) {
    return this.http.delete(BACKEND_URL + permissionId);
  }
}
