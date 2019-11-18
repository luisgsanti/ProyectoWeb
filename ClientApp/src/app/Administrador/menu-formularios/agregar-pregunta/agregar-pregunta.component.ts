import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../../services/pregunta.service';
import { Pregunta } from '../../../models/pregunta';

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent implements OnInit {

  constructor(private preguntaService: PreguntaService) { } 
  pregunta: Pregunta; 

  ngOnInit() {
    this.pregunta = {id: 0, descripcion: '', categoria: '', estado: false};
  }

  add() {
    this.preguntaService.add(this.pregunta)
    .subscribe(/*pregunta => {
    alert('Se agrego nueva pregun ta')
  }*/);
}

}
