import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  errLogin = ""
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private _global: GlobalService, private router: Router) { }
  ngOnInit(): void {
  }
  get email() { return this.loginForm.get("email") }
  get password() { return this.loginForm.get("password") }
  login() {
    if (this.loginForm.valid) {
      this._global.login(this.loginForm.value).subscribe(
        (data) => {
          localStorage.setItem('testToken', data.data.token)
        },
        (e) => { console.log(e); this.errLogin = e.error.data },
        () => {
          this.errLogin = ""
          this._global.isAuthed = true
          this.router.navigate(["/user"])
        }
      )
    }
  }

}
