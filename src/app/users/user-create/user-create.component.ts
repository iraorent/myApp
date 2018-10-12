import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";


import { UserService } from "../user.service";
import { User } from "../user.model";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector:"app-user-create",
    templateUrl:"./user-create.component.html",
    styleUrls: ["./user-create.component.css"] 
})


export class UserCreateComponent implements OnInit, OnDestroy {

    user: User;
    isLoading = false;
    form: FormGroup;

    private mode = "create";
    private userId: string;
    private authStatusSub: Subscription;

    constructor(
        public userService: UserService,
        public route: ActivatedRoute,
        private authService: AuthService
      ) {}

      ngOnInit() {
        this.authStatusSub = this.authService
          .getAuthStatusListener()
          .subscribe(authStatus => {
            this.isLoading = false;
          });

        this.form = new FormGroup({
          name: new FormControl(null, {
            validators: [Validators.required]
          }),
          email: new FormControl(null, {
            validators: [Validators.required] }),
          emp: new FormControl(null,null), 
          role: new FormControl(null, {
                validators: [Validators.required]
              }),
          remarks: new FormControl(null, null),
        });

        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          //   if (paramMap.has("userId")) {
          //     this.mode = "edit";
          //     this.userId = paramMap.get("userId");
          //     this.isLoading = true;
          //     this.userService.getPost(this.userId).subscribe(postData => {
          //       this.isLoading = false;
          //       this.post = {
          //         id: postData._id,
          //         title: postData.title,
          //         content: postData.content,
          //         imagePath: postData.imagePath,
          //         creator: postData.creator
          //       };
          //       this.form.setValue({
          //         title: this.post.title,
          //         content: this.post.content,
          //         image: this.post.imagePath
          //       });
          //     });
          //   } else {
          //     this.mode = "create";
          //     this.userId = null;
          //   }
          // });
        });
    }

    onSaveUser() {
        if (this.form.invalid) {
          return;
        }
        this.isLoading = true;
        // if (this.mode === "create") {
        //   this.userService.addPost(
        //     this.form.value.title,
        //     this.form.value.content,
        //     this.form.value.image
        //   );
        // } else {
        //   this.userService.updatePost(
        //     this.userId,
        //     this.form.value.title,
        //     this.form.value.content,
        //     this.form.value.image
        //   );
        // }
        this.form.reset();
      }
    
      ngOnDestroy() {
        this.authStatusSub.unsubscribe();
      }
}
