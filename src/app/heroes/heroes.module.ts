import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './component/heroe-card/heroe-card.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmComponent } from './component/confirm/confirm.component';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent, 
    HeroeComponent, 
    HomeComponent, 
    ListadoComponent,
    HeroeCardComponent, 
    ImagenPipe, ConfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    FlexLayoutModule, 
    MaterialModule
  ]
})
export class HeroesModule { }