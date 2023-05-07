import { Component } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { PacientesDto } from '../API/models';
import { PacientesService } from '../API/services';
import { CitasService } from '../API/services';
import { CitasDto } from '../API/models';
import { DiagnosticosDto } from '../API/models';
import { DiagnosticosService } from '../API/services';


@Component({
  selector: 'app-paciente-main',
  templateUrl: './paciente-main.component.html',
  styleUrls: ['./paciente-main.component.css']
})
export class PacienteMainComponent {
  paciente: PacientesDto = {
    numSeguridadSocial: '',
    numTarjeta: '',
    telefono: '',
    direccion: '',
    usuario: '',
    nombre: '',
    apellidos: '',
    clave: ''
  };

diagnostico: any = {};
  showCitas: boolean = false;

  constructor(private pacientesService: PacientesService, private citasService: CitasService, private diagnosticosService: DiagnosticosService) { }

  ngOnInit(): void {
    this.pacientesService.obtenerPaciente()
      .then((response: PacientesDto) => {
        this.paciente = response;
      })
      .catch((error) => console.log(error));
  }


  hasFetchedCitas = false;
  citas: CitasDto[] = [];
  
  toggleCitas() {
    if (!this.hasFetchedCitas) {
      if (this.paciente && this.paciente.usuario) {
        this.citasService.getCitasByPaciente(this.paciente.usuario)
          .subscribe((data: CitasDto[]) => {
            this.citas = data;
            console.log(data);
            this.showCitas = true;
            this.hasFetchedCitas = true;
          }, error => console.log(error));
      } else {
        console.log('No se puede buscar citas sin un usuario de paciente definido');
      }
    } else {
      this.showCitas = !this.showCitas;
    }
  }
  


  toggleDiagnostico(citaId: number): void {
    this.diagnosticosService.getDiagnosticoByCitaId(citaId)
      .subscribe((diagnostico: DiagnosticosDto) => {
        this.diagnostico = diagnostico;
      }, error => console.log(error));
  }
}
