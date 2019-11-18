import { Component, OnInit } from '@angular/core'; 
import { DocenteServiceService } from '../../../services/docente.service';
import { Docente } from '../../../models/docente';

@Component({
  selector: 'app-agregar-docentes',
  templateUrl: './agregar-docentes.component.html',
  styleUrls: ['./agregar-docentes.component.css']
})
export class AgregarDocentesComponent implements OnInit {

  constructor(private docenteservice:DocenteServiceService) { } 
  docente: Docente; 
  
  ngOnInit() {
    this.docente = {id:0,identificacion:'', primerNombre:'', segundoNombre:'', primerApellido:'', segundoApellido:'', correo:'', fechaNacimiento:'', genero:'', estado:'' ,cargo:'',/*telefono:0,*/ facultad:''};
  }
   add() {

      this.docenteservice.add(this.docente)
      .subscribe();
  }
}
