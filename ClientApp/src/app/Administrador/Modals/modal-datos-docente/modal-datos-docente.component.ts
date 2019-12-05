import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-datos-docente',
  templateUrl: './modal-datos-docente.component.html',
  styleUrls: ['./modal-datos-docente.component.css']
})
export class ModalDatosDocenteComponent implements OnInit {

  constructor(public ActiveModal: NgbActiveModal) { }

  ngOnInit() {

  }

}
