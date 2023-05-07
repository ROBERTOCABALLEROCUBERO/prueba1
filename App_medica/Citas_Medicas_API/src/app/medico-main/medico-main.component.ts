import { Component } from '@angular/core';
import { Medicos } from '../API/models';
import { MedicosService } from '../API/services';
import { Observable } from 'rxjs';
import { CitasService } from '../API/services';
import { CitasDto } from '../API/models';
import { DiagnosticosService } from '../API/services';
import { DiagnosticosDto } from '../API/models';
import { Citas } from '../API/models';

@Component({
  selector: 'app-medico-main',
  templateUrl: './medico-main.component.html',
  styleUrls: ['./medico-main.component.css'],
})
export class MedicoMainComponent {
  medico: Medicos = {};
  selectedCita: Citas = {};
  showDiagnostico: boolean = false;
  constructor(
    private medicosService: MedicosService,
    private citasService: CitasService,
    private diagnosticosService: DiagnosticosService
  ) {}

  ngOnInit(): void {
    this.medicosService.getMedicoActual().subscribe(
      (medicodata) => {
        this.medico = medicodata;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  hasFetchedCitas = false;
  citas: CitasDto[] = [];
  showCitas: boolean = false;
  toggleCitas() {
    if (!this.hasFetchedCitas) {
      if (this.medico && this.medico.usuario) {
        this.citasService.getCitasByMedico(this.medico.usuario).subscribe(
          (data: CitasDto[]) => {
            this.citas = data;
            console.log(data);
            this.showCitas = true;
            this.hasFetchedCitas = true;
          },
          (error) => console.log(error)
        );
      } else {
        console.log(
          'No se puede buscar citas sin un usuario de paciente definido'
        );
      }
    } else {
      this.showCitas = !this.showCitas;
    }
  }

  diagnostico: any = {};
  toggleDiagnostico(citaId: number): void {
    this.showDiagnostico = true;
    this.diagnosticosService.getDiagnosticoByCitaId(citaId).subscribe(
      (diagnostico: DiagnosticosDto) => {
        this.diagnostico = diagnostico;
      },
      (error) => console.log(error)
    );
  }

  // En la definición de la clase del componente
  selectedCitaId: number | undefined = undefined;
  showForm: boolean = false;

// ...
toggleForm() {
  // Aquí llamamos a la función para ocultar el diagnóstico
  this.hideDiagnostico();
}
hideDiagnostico() {
  this.showDiagnostico = false;

}
addDiagnostico(selectedCita: Citas) {
  
  // Verificar que selectedCitaId tenga un valor
  if (this.selectedCitaId !== undefined) {
    this.hideDiagnostico();
    // Llamada al servicio para insertar diagnóstico
    this.diagnosticosService.insertDiagnostico({...this.diagnostico, citaId: this.selectedCitaId})
      .subscribe((response) => {
        console.log('Diagnóstico añadido correctamente');
        // Cerrar pop up y limpiar campos
        this.showForm = false;
        this.selectedCitaId = undefined;
        this.diagnostico = {
          citaId: undefined,
          enfermedad: null,
          id: null,
          valoracionEspecialista: null
          
        };
      }, (error) => {
        console.error(error);
      });
  }
}



}
