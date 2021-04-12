import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../component/confirm/confirm.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 15px
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [{
    id: 'DC Comics',
    desc: 'DC - Comics'
  }, {
    id: 'Marvel Comics',
    desc: 'Marvel - Comics'
  }];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    characters: ''
  }
  constructor(private heroesSvc: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroesSvc.getHeroePorId(id)))
        .subscribe(heroe => this.heroe = heroe);
    }

  }

  guardarHeroe() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    if (!this.heroe.id) {
      this.heroesSvc.insertarHeroe(this.heroe).subscribe(resp => {
        this.heroe = resp;
        this.router.navigate(['/heroes/editar', this.heroe.id])
        this.mostrarSnackbar('Los cambios han sido guardados correctamente')
      })
    } else {
      this.heroesSvc.actualizarHeroe(this.heroe).subscribe(resp => {
        this.mostrarSnackbar('Los cambios han sido guardados correctamente')
      })
    }
  }

  borrarHeroe() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      result => {
        if (result) {
          this.heroesSvc.borrarHeroe(this.heroe.id!).subscribe(resp => {
            this.router.navigate(['/heroes/listado'])
          });
        }
      }
    )

  }

  mostrarSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000
    });
  }

}
