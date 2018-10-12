import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";


import { PermissionService } from "../permission.service";
import { Permission } from "../permission.model";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector:"app-permission-create",
  templateUrl:"./permission-create.component.html",
  styleUrls: ["./permission-create.component.css"] 
})


export class PermissionCreateComponent implements OnInit, OnDestroy {

  permission: Permission;
  isLoading = false;
  form: FormGroup;

  private mode = "create";
  private permissionId: string;
  private authStatusSub: Subscription;

  constructor(
    public permissionService: PermissionService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });


    //Declare Form Control 
    this.form = new FormGroup({
      module: new FormControl(null, {
        validators: [Validators.required]
      }),
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        validators: [Validators.required]
      })
    });

    //Get permissionId from Url and then define the mode
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      //if (paramMap.has("permissionId")) {
      //  this.mode = "edit";
      //  this.permissionId = paramMap.get("permissionId");
      //  this.isLoading = true;
      //  this.permissionService.getPermission(this.permissionId).subscribe(permissionData => {
      //    this.isLoading = false;
      //    this.permission = {
      //      id: permissionData._id,
      //      module: permissionData.module,
      //      name: permissionData.name,
      //      description: permissionData.description,
      //    };
      //    this.form.setValue({
      //      module: this.permission.module,
      //      name: this.permission.name,
      //      description: this.permission.description
      //    });
      //  });
      //} else {
      //  this.mode = "create";
      //  this.permissionId = null;
      //}

      this.mode = "create";
      this.permissionId = null;
    });
  }

  onSavePermission() {

    debugger
    //Validate Form Input
    if (this.form.invalid) {
     return;
    }

    this.isLoading = true;

    if (this.mode === "create") {
      var fValue = this.form.value;
      debugger
     this.permissionService.addPermission(
       this.form.value.module,
       this.form.value.name,
       this.form.value.description
     );
    } else {
     this.permissionService.updatePermission(
       this.permissionId,
       this.form.value.module,
       this.form.value.name,
       this.form.value.description
     );
    }
    this.form.reset();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
