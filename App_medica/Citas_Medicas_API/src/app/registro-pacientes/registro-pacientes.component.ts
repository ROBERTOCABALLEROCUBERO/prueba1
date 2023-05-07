import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacientesDto } from '../API/models';
import { PacientesService } from '../API/services';
@Component({
  selector: 'app-registro-pacientes',
  templateUrl: './registro-pacientes.component.html',
  styleUrls: ['./registro-pacientes.component.css']
})
export class RegistroPacientesComponent {
  
    form: FormGroup;
  
    constructor(private fb: FormBuilder, private pacientesService: PacientesService) {
      this.form = this.fb.group({
        nombre: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(50)
        ])],
        apellidos: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(50)
        ])],
        direccion: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])],
        telefono: ['', Validators.compose([
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9)
        ])],
        usuario: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(50)
        ])],
        clave: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])],
        numSeguridadSocial: ['', Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern(/^[0-9]+$/)
        ])],
        numTarjeta: ['', Validators.compose([
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
          Validators.pattern(/^[0-9]+$/)
        ])],
      });
    }
  
    onSubmit() {
      if (this.form.valid) {
        const paciente: PacientesDto = this.form.value;
        this.pacientesService.registrarPaciente(paciente)
          .then(() => {
            console.log('Paciente registrado');
            this.form.reset();
          })
          .catch((error) => console.error('Error al registrar paciente', error));
      }
    }
  }