import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userData = { name: "", gender: "", age: "", email: "", password: "", phone: "", userType: "" }
  emailError = ""
  constructor(
    private _global: GlobalService,
    private router: Router,
    // private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  add(registerUser: NgForm) {
    if (registerUser.valid) {
      this._global.addUser(this.userData).subscribe(
        (res: any) => { },
        (err: any) => {
          if (err.error.data.includes('email')) this.emailError = "email used before"
        },
        () => {
          this.emailError = ""
          registerUser.resetForm()
          //this.toastr.success('Success!', 'registered!');
          setTimeout(() => {
            this.router.navigateByUrl('/admin/showAllUsers?msg=success')
          }, 500)
        }//final
      )
    }
  }
}
