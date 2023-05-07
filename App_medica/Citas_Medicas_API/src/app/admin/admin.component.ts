import { Component, OnInit, Inject } from '@angular/core';
import { Citas, DiagnosticosDto, Medicos, MedicosDto, PacientesDto } from '../API/models';
import { CitasService, DiagnosticosService, MedicosService, PacientesService } from '../API/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private pacientesService: PacientesService, private medicosService: MedicosService, private citasService: CitasService, private diagnosticosService: DiagnosticosService) { }

  ngOnInit(): void {
  }

  pacientes: PacientesDto[] = [];
  medicos: Medicos[] = [];
  citas: Citas[] = [];
  diagnosticos: DiagnosticosDto[] = [];
  selectedCitaId: number | null = null;
  selectedDiagnostico: DiagnosticosDto | null = null;

  listarPacientes(): void {
    this.pacientesService.apiPacientesGet().then(pacientes => {
      this.pacientes = pacientes;
    });
  }
  borrarPaciente(usuario: string){

    this.pacientesService.deletePaciente(usuario)
    .subscribe(() => {
      // Borramos el paciente de la lista
      this.pacientes = this.pacientes.filter(paciente => paciente.usuario !== usuario);
    });

  }
  
  listarMedicos(): void {
    this.medicosService.getMedicos().toPromise().then((medicos: Medicos[] | undefined) => {
      if (medicos) {
        this.medicos = medicos;
      }
    });
  }

  listarCitas(): void {
    this.citasService.getCitas().toPromise().then((citas: Citas[] | undefined) => {
      if (citas) {
        this.citas = citas;
      }
    });
  }

  listarDiagnosticos(): void {
    this.diagnosticosService.getDiagnosticos().toPromise().then((diagnosticos: DiagnosticosDto[] | undefined) => {
      if (diagnosticos) {
        this.diagnosticos = diagnosticos;
      }
    });
  }

  onCitaSelected(citaId: number): void {
    this.selectedCitaId = citaId;
    this.selectedDiagnostico = null;
    this.diagnosticosService.getDiagnosticoByCitaId(citaId).subscribe((diagnostico: DiagnosticosDto) => {
      this.selectedDiagnostico = diagnostico;
    });
  }

  onCitaDeselected(): void {
    this.selectedCitaId = null;
    this.selectedDiagnostico = null;
  }

}
