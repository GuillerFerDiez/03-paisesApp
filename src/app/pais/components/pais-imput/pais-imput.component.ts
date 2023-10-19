import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pais-imput',
  templateUrl: './pais-imput.component.html',
  styleUrls: ['./pais-imput.component.css']
})

export class PaisImputComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  termino: string = '';
  buscar() {
    this.onEnter.emit(this.termino);
  }
}