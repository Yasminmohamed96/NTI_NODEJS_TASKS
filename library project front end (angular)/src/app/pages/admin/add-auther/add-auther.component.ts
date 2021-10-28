import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-add-auther',
  templateUrl: './add-auther.component.html',
  styleUrls: ['./add-auther.component.css']
})
export class AddAutherComponent implements OnInit {
  userData = { name: "", email: "" }
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
      this._global.addAuther(this.userData).subscribe(
        (res: any) => { },
        (err: any) => {
          if (err.error.data.includes('email')) this.emailError = "email used before"
        },
        () => {
          this.emailError = ""
          registerUser.resetForm()
          //this.toastr.success('Success!', 'registered!');
          setTimeout(() => {
            this.router.navigateByUrl('/admin/showAllAuthers?msg=success')
          }, 500)
        }//final
      )
    }
  }
}