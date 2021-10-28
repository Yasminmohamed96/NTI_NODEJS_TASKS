import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './providers/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session17';
  check: any = ""
  constructor(private _global: GlobalService,
    private router: Router) { }
  ngOnInit(): void {
    // // this.check = this._global.userData.data.userType
    // console.log(this._global.userData)

  }
}