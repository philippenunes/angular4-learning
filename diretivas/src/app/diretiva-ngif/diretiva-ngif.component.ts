import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {


  cursos: string[] = ["Angular", "Java", "JavaScript"];

  mostraCursos: boolean = false;

  onMostraCursos() {
    this.mostraCursos = !this.mostraCursos;
  }

  constructor() { }

  ngOnInit() {
  }

}
