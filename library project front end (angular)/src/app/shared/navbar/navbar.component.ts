import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoaded = false; d: any = {}; tOf: boolean = false;
  constructor(public _global: GlobalService, public _router: Router) { }

  ngOnInit(): void {
    this._global.profile().subscribe(
      (data) => {
        this.d = data.data;
        this._global.isAuthed = true;
        if (data.data.userType === "admin") {
          this.tOf = true;

        }
        console.log(this._global.isAdmin)
        console.log(this._global.userData)
      },
      (e) => { this._global.isAuthed = false, this.isLoaded = true },
      () => { this.isLoaded = true; this._global.userData = this.d; this._global.isAdmin = this.tOf; }
    )
  }
  logout() {
    this._global.logout().subscribe(
      (data) => { },
      (e) => { },
      () => {
        localStorage.removeItem('testToken')
        this._global.isAuthed = false
        this._global.userData = null
        this._router.navigateByUrl('/')
      }
    )

  }
}
