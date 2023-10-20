import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-imput',
  templateUrl: './pais-imput.component.html',
  styleUrls: ['./pais-imput.component.css']
})

export class PaisImputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  //Creo un observable para detectar cuando se deja de modificar el input
  debouncer: Subject<string> = new Subject();
  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    //Pasamos el término (input) al obserbable debouncer que está siempre ejecutándose
    this.debouncer.next(this.termino);
  }

  ngOnInit(): void {
    //Debouncer está siempre ejecutándose en memoria
    this.debouncer.pipe(debounceTime(300)) //Espera 300 milisegundos
      .subscribe(valor => {
        console.log('debouncer: ', valor); //Escribe en consola el valor de término
        this.onDebounce.emit(valor); //Se envía el valor al padre
      });
  }
}