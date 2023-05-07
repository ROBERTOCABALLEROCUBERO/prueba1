import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MedicosDto } from '../API/models';
import { MedicosService } from '../API/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-medico',
  templateUrl: './registrar-medico.component.html',
  styleUrls: ['./registrar-medico.component.css']
})
export class RegistrarMedicoComponent {

  medicoForm: FormGroup = new FormGroup({
    apellidos: new FormControl(''),
    clave: new FormControl(''),
    nombre: new FormControl(''),
    numColegiado: new FormControl(''),
    usuario: new FormControl('prueba')
  });

  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private medicoService: MedicosService
  ) { }

  ngOnInit(): void {
    this.medicoForm = this.fb.group({
      apellidos: ['', Validators.required],
      clave: ['', Validators.required],
      nombre: ['', Validators.required],
      numColegiado: ['', Validators.required],
      usuario: ['', Validators.required]
    });
  }

  onSubmit() {
    const medico: MedicosDto = this.medicoForm.value;
    this.medicoService.registro(medico).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = "Ha ocurrido algun error con el registro.";
      }
    );
  }

}


