import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo2-Internacionalizacion';
idioma:string='es'

constructor(private TranslateService:TranslateService){
  this.TranslateService.use(this.idioma);
}
cambiarIdioma(nuevoIdioma:string){
  this.idioma=nuevoIdioma;
  this.TranslateService.use(this.idioma);
}
}