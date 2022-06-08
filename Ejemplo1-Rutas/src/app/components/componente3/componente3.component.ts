import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css'],
})
export class Componente3Component implements OnInit {
  constructor(private ruta: ActivatedRoute) {
    /*
    1. Recuperar el dato, con el mismo nombre con el que lo declaro,
    en app.module.ts->{path:'c3/:codigo',component:Componente3Component}
    */
    console.log('HOTEL: ' + this.ruta.snapshot.params['codigo']);
    /*
    2. Recuperamos todos los parámetros
    */
    console.log("Fecha de entrada: " + this.ruta.snapshot.queryParams.entrada);
    console.log("Fecha de salida: " + this.ruta.snapshot.queryParams['salida']);
    console.log("Nº de personas: " + this.ruta.snapshot.queryParams.personas);
  }
  
  ngOnInit(): void {}
}
