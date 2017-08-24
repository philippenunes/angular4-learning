import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  url: string = 'http://loiane.com';
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  cursoAngular: boolean = true;

  msgBinding: string = 'success';

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 0;

  
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  onMudouValor(evento) {
    console.log(evento);
  }

  constructor() { }

  ngOnInit() {
  }

}
