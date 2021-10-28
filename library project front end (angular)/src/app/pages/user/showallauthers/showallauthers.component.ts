import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-showallauthers',
  templateUrl: './showallauthers.component.html',
  styleUrls: ['./showallauthers.component.css']
})
export class ShowallauthersComponent implements OnInit {
  authers: any = {}
  constructor(private _global: GlobalService,
    private router: Router) { }

  ngOnInit(): void {
    this.showAllAuthers()
  }

  showAllAuthers(this: any) {
    this._global.showAuthers().subscribe(
      (data: any) => {
        this.authers = data.data.authersData
        console.log(this.authers)
      },
      (e: any) => { console.log(e) },
      () => {

      }
    )
  }

}
