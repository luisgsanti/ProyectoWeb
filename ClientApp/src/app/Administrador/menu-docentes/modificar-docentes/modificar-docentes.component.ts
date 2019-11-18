import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocenteServiceService } from '../../../services/docente.service';
import { Docente } from '../../../models/docente';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modificar-docentes',
  templateUrl: './modificar-docentes.component.html',
  styleUrls: ['./modificar-docentes.component.css']
})
export class ModificarDocentesComponent implements OnInit {
  docente: Docente;
  constructor(
    private route: ActivatedRoute,
    private docenteService: DocenteServiceService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }
  get(): void {

    //alert(JSON.stringify(this.route.snapshot.paramMap));

    const id =
    +this.route.snapshot.paramMap.get('id');
    this.docenteService.get(id)
    .subscribe(hero => this.docente = hero);
    }
    

    update(): void {
      this.docenteService.update(this.docente)
      .subscribe(() => this.goBack());
    }

    desactivar(){
      this.docente.estado="INACTIVO";
      this.docenteService.update(this.docente)
      .subscribe(() => this.goBack());
    }

    delete(): void {
      this.docenteService.delete(this.docente)
      .subscribe(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }
    
}
