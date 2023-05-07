import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MedicosDto } from '../API/models';
import { MedicosService } from '../API/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css'],
})
export class EditarMedicoComponent {
  medicoForm: FormGroup = new FormGroup({
    apellidos: new FormControl(''),
    clave: new FormControl(''),
    nombre: new FormControl(''),
    numColegiado: new FormControl(''),
    usuario: new FormControl(''),
  });

  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private medicosService: MedicosService
  ) {}

  ngOnInit(): void {
    this.medicoForm = this.fb.group({
      apellidos: ['', Validators.required],
      clave: ['', Validators.required],
      nombre: ['', Validators.required],
      numColegiado: ['', Validators.required],
      usuario: ['', Validators.required],
    });
  }
  onSubmit(): void {
    const medico: MedicosDto = this.medicoForm.value;

    this.medicosService.updateMedico(medico).subscribe(
      (response) => () => {
        this.router.navigate(['/medico']);
      },
      (error) => {
        this.errorMessage = 'Ha ocurrido algun error con el registro.';
      }
    );
  }
}
