import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})

export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarCapital(this.termino).subscribe({
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
