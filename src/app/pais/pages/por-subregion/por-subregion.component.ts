import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-subregion',
  templateUrl: './por-subregion.component.html',
  styleUrls: ['./por-subregion.component.css']
})

export class PorSubregionComponent {
  subregiones: string[] = ['Eastern Europe', 'Northern Europe', 'Southern Europe', 'Western Europe'];
  subregionActiva: string = '';
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  activarSubregion(subregion: string) {
    if(subregion == this.subregionActiva){
      return;
    }
    
    this.subregionActiva = subregion;
    this.buscarRegion(this.subregionActiva);
  }

  buscarRegion(termino: string) {
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarPorSubregion(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises;
        console.log(paises);
        console.log(paises[0].capital);
      },
      error: (e) => {
        console.log(e);
        this.hayError = true;
      }
    });
  }
}
