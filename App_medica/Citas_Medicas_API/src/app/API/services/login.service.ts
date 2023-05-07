import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = 'https://localhost:7049/api/';

  constructor() { }

  login(usuario: string, clave: string) {
    const bodyFormData = new FormData();
    bodyFormData.append('Usuario', usuario);
    bodyFormData.append('Clave', clave);
  
    return axios.post(`${this.baseUrl}Login`, bodyFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'accept': '*/*'
      }
    });
  }

  isPaciente() {
    return axios.get(`${this.baseUrl}Pacientes/paciente`, {
      headers: {
        'accept': 'text/plain',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  isMedico() {
    return axios.get(`${this.baseUrl}Medicos/medico`, {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}
