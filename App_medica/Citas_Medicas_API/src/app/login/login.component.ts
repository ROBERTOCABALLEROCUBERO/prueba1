/* import { Component } from '@angular/core';
import { LoginService } from '../API/services/login.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data: any = {};
  auth: string = "";

  constructor(private loginService: LoginService, private router: Router, private jwtHelper: JwtHelperService) { }

  login(): void {
    const body = {
      'Usuario': this.data.usuario,
      'Clave': this.data.clave,
    };
    this.loginService.apiLoginPost$Response({ body })
    .subscribe(
      (response: HttpResponse<any>) => {
        const jsonObject = JSON.parse(response.body);
        const token = jsonObject.token;
        if (token) {
          const decodedToken = this.jwtHelper.decodeToken(token) as { rol: string };
          if (decodedToken && decodedToken.rol === 'paciente') {
            this.router.navigate(['/paciente']);
          } else if (decodedToken && decodedToken.rol === 'medico') {
            this.router.navigate(['/medico']);
          } else {
            this.auth = 'error';
          }
          
      }
    },
      error => {
        console.log(error);
        this.auth = 'error';
      }
    );
  }
}

 */

/*
import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data: any = {};
  auth: string = "";

  constructor(private router: Router) { }

  login(): void {
    const bodyFormData = new FormData();
    bodyFormData.append('Usuario', this.data.usuario);
    bodyFormData.append('Clave', this.data.clave);
  
    // Hacer una llamada POST para obtener el token de autenticación
    axios.post('https://localhost:7049/api/Login', bodyFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'accept': '*/ /*'
      }
    })
    .then(response => {
      // Si la respuesta es exitosa, guardar el token en localStorage
      const token = response.data.token;
      localStorage.setItem('token', token);
  
      // Hacer una llamada GET a /api/Pacientes/paciente para comprobar si el usuario es un paciente
      axios.get('https://localhost:7049/api/Pacientes/paciente', {
        headers: {
          'accept': 'text/plain',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => {
        // Si la respuesta no es 404, redirigir al usuario a la página correspondiente
        if (response.status !== 404) {
          this.router.navigate(['/paciente']);
        } else {
          // Si la respuesta es 404, hacer una llamada GET a /api/Medicos/medico para comprobar si el usuario es un médico
          axios.get('https://localhost:7049/api/Medicos/medico', {
            headers: {
              'accept': '*/ /*',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then(response => {
            // Si la respuesta es exitosa, redirigir al usuario a la página correspondiente
            this.router.navigate(['/medico']);
          })
          .catch(error => {
            console.log(error);
            // Aquí puedes manejar el error en caso de que la llamada falle
          });
        }
      })
      .catch(error => {
        console.log(error);
        // Aquí puedes manejar el error en caso de que la llamada falle
      });
    })
    .catch(error => {
      console.log(error);
      // Aquí puedes manejar el error en caso de que la llamada falle
    });
  }
}   */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../API/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  data: any = {};

  constructor(private router: Router, private loginService: LoginService) {}
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['']);
    }
  }
  login(): void {
    this.loginService
      .login(this.data.usuario, this.data.clave)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        this.checkUserRole();
      })
      .catch((error) => {
        console.log(error);
        // Aquí puedes manejar el error en caso de que la llamada falle
      });
  }

  checkUserRole(): void {
    this.loginService
      .isPaciente()
      .then((response) => {
        // Si la respuesta no es 404, redirigir al usuario a la página correspondiente
        if (response.status === 200) {
          this.router.navigate(['/paciente']);
        }
          // Si la respuesta es 404, hacer una llamada GET a /api/Medicos/medico para comprobar si el usuario es un médico
         
        
      })
 .catch((error) => {
        console.log(error);
        // Aquí puedes manejar el error en caso de que la llamada falle
      });

      this.loginService
      .isMedico()
      .then((response) => {
        // Si la respuesta es exitosa, redirigir al usuario a la página correspondiente
        this.router.navigate(['/medico']);
      })
      .catch((error) => {
        console.log(error);
        // Aquí puedes manejar el error en caso de que la llamada falle
      });
  }
}
