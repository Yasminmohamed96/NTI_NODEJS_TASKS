import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allRoles: any[] = []
  sliders: any[] = [
    "assets/1.jpg", "assets/2.jpg", "assets/3.jpg",
  ]
  constructor(public _global: GlobalService) { }

  ngOnInit(): void {

  }




}
