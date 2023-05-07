import { Component } from '@angular/core';
import { CitasService } from '../API/services';
import { CitasDto } from '../API/models';

@Component({
selector: 'app-agendar-cita',
templateUrl: './agendar-cita.component.html',
styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {
fecha: string = "";
observaciones: string = "";
pacienteNombreCompleto: string = "";
medicoNombreCompleto: string = "";

constructor(private citasService: CitasService) {}

guardarCita() {
const cita: CitasDto = {
fecha: this.fecha,
observaciones: this.observaciones,
pacienteNombreCompleto: this.pacienteNombreCompleto,
medicoNombreCompleto: this.medicoNombreCompleto
};
this.citasService.insertCitas(cita).subscribe(
  (response) => {
    console.log('Cita guardada');
    // Aquí puedes redirigir al usuario a otra página
  },
  (error) => console.error('Error al guardar la cita:', error)
);
}
}