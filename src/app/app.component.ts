import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [

  ]

  constructor(http: HttpClient){
    console.log(http);
  }
}
