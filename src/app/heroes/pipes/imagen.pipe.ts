import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  noImage: string = 'assets/no-image.png';

  transform(heroe: Heroe): unknown {
    let url: string = this.noImage;
    if (heroe.id) { 
      if (heroe.alt_image) {
        url = heroe.alt_image;
      } else {
        url = `assets/heroes/${heroe.id}.jpg`;
      }
    }
    return url;
  }

}
