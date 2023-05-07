import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../API/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  localStorage: Storage = window.localStorage; // Declaración de la propiedad localStorage

ruta:string = "";
  constructor(private router: Router, private loginService: LoginService) { this.checkUserRole()}

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }



  checkUserRole(): void {
    this.loginService
      .isPaciente()
      .then((response) => {
        // Si la respuesta no es 404, redirigir al usuario a la página correspondiente
        if (response.status === 200) {
          this.ruta = "/paciente"
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
       this.ruta = "/medico"
      })
      .catch((error) => {
        console.log(error);
        // Aquí puedes manejar el error en caso de que la llamada falle
      });
  }


 


}
