import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  edituserData = { name: "", gender: "", age: "", email: "", phone: "" }
  emailError: string = "";
  constructor(private _global: GlobalService,
    private router: Router) { }

  ngOnInit(): void {
    this._global.profile().subscribe(
      (data) => { this.edituserData = data.data },
      (e) => { console.log(e) },
      () => { }
    )

  }
  editmyprofile(editUser: NgForm) {
    if (editUser.valid) {
      this._global.editMyProfile(this.edituserData).subscribe(
        (res) => { },
        (err) => {
          if (err.error.data.includes('email')) this.emailError = "email used before"
        },
        () => {
          this.emailError = ""
          editUser.resetForm()
          //this.toastr.success('Success!', 'registered!');
          setTimeout(() => {
            this.router.navigateByUrl('/user?msg=success')
          }, 500)
        }//final
      )
    }
  }
}