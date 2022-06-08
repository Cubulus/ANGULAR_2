import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat:number =40.30028956572066;
  lng:number =-3.7335615551385066;
  zoom: number =17;
}
