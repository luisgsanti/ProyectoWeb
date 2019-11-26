import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  Docente
} from '../../../models/docente';
import {
  DocenteServiceService
} from '../../../services/docente.service';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-asignar-evaluador',
  templateUrl: './asignar-evaluador.component.html',
  styleUrls: ['./asignar-evaluador.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AsignarEvaluadorComponent implements OnInit {

  closeResult: string;
  docentes: Docente[];

  constructor(private docenteservice: DocenteServiceService, private modalService: NgbModal) {}
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.docenteservice.getActivosAdministrativos().subscribe(docentes => this.docentes = docentes);
  }


  openLg(content) {
    this.modalService.open(content, {
      size: 'lg'
    });
  }

  openXl(content) {
    this.modalService.open(content, {
      size: 'xl'
    });
  }


}
