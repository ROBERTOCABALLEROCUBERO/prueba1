import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';
import { DiagnosticosDto } from '../models';
import { ApiConfiguration } from '../api-configuration';


@Injectable({
  providedIn: 'root'
})
export class DiagnosticosService {
    private readonly baseURL: string;

    constructor(config: ApiConfiguration) {
      this.baseURL = config.rootUrl;
    }

  getDiagnosticos(): Observable<DiagnosticosDto[]> {
    const url = `${this.baseURL}/api/Diagnosticos`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.get<DiagnosticosDto[]>(url, { headers }).then(response => response.data));
  }

  getDiagnosticoById(id: number): Observable<DiagnosticosDto> {
    const url = `${this.baseURL}/api/Diagnosticos/${id}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.get<DiagnosticosDto>(url, { headers }).then(response => response.data));
  }

  insertDiagnostico(diagnostico: DiagnosticosDto): Observable<DiagnosticosDto> {
    const url = `${this.baseURL}/api/Diagnosticos`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.post<DiagnosticosDto>(url, diagnostico, { headers }).then(response => response.data));
  }

  updateDiagnostico(id: number, diagnostico: DiagnosticosDto): Observable<DiagnosticosDto> {
    const url = `${this.baseURL}/api/Diagnosticos/${id}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.put<DiagnosticosDto>(url, diagnostico, { headers }).then(response => response.data));
  }

  deleteDiagnostico(id: number): Observable<boolean> {
    const url = `${this.baseURL}/api/Diagnosticos/${id}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.delete<boolean>(url, { headers }).then(response => response.data));
  }

  getDiagnosticoByCitaId(citaId: number): Observable<DiagnosticosDto> {
    const url = `${this.baseURL}/api/Diagnosticos/cita/${citaId}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.get<DiagnosticosDto>(url, { headers }).then(response => response.data));
  }
}
