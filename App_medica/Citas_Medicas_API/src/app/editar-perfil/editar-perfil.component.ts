import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from '../API/services';
import { PacientesDto } from '../API/models';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  form: FormGroup;
  paciente: PacientesDto = {};

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

  ngOnInit(): void {
    this.pacientesService.obtenerPaciente().then(paciente => {
      this.paciente = paciente;
    });
  }

  
 
  
  async onSubmit(): Promise<void> {
    const paciente = {
      nombre: this.form.get('nombre')?.value,
      apellidos: this.form.get('apellidos')?.value,
      direccion: this.form.get('direccion')?.value,
      telefono: this.form.get('telefono')?.value,
      clave: this.form.get('clave')?.value,
      usuario: this.paciente.usuario,
      numSeguridadSocial: this.form.get('numSeguridadSocial')?.value,
      numTarjeta: this.form.get('numTarjeta')?.value
    };
    await this.pacientesService.apiPacientesUsernamePut(this.paciente.usuario!, paciente);
    // Redirigir a la página del perfil del paciente
  }


}


