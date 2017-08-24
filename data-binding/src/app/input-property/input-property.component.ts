import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  //Recebe o valor da varíavel de outro componente
  @Input('nome') nomeCurso: string = '';

  

  constructor() { }

  ngOnInit() {
  }

}
