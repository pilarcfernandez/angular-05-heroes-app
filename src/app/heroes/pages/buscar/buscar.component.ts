import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado?: Heroe;

  constructor(private heroeSvc: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    if (this.termino != null) {
      this.heroeSvc.buscarHeroesConTermino(this.termino.trim()).subscribe(
        (heroes) => { this.heroes = heroes }
      );
    }
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if(!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    } 

    this.heroeSeleccionado = event.option.value;
    if (this.heroeSeleccionado != null) {
      this.termino = this.heroeSeleccionado!.id!;
    }
  }

}
