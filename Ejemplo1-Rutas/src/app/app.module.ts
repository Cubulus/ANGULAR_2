import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

/*
Recursos necesarios para las rutas:
1. El Routes, en Angular nos permite implementar navegación en nuestra aplicación.
Podemos asignar, vistas/componentes para cada url que deseemos. Tambíen permite
enviar y recibir parámetros.
2. RouterModule, para poder agregar directamente un nuevo componente que vaya a tener
su propia ruta asignada
*/

import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { InicioComponent } from './components/inicio/inicio.component';

/*Array de rutas, para que se genere recorrido y conexión
        ↧
*/
const misRutas: Routes =[
  {path:'c1', component:Componente1Component},
  {path:'c2', component:Componente2Component},
  {path:'c3/:codigo', component:Componente3Component}, //Parametros en ruta- ruta/:parametro
  {path:'inicio', component:InicioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
