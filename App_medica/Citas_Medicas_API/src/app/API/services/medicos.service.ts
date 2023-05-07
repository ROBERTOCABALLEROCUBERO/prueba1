import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicos, MedicosDto } from '../models';
import { ApiConfiguration } from '../api-configuration';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private readonly baseURL: string;

  constructor(private http: HttpClient, config: ApiConfiguration) {
    this.baseURL = config.rootUrl;
  }

  getMedicos(): Observable<Medicos[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Medicos[]>(`${this.baseURL}/api/Medicos`, { headers });
  }

  getMedico(username: string): Observable<Medicos> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Medicos>(`${this.baseURL}/api/Medicos/${username}`, { headers });
  }

  updateMedico (medico: MedicosDto): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put<any>(`${this.baseURL}/api/Medicos/`, medico, { headers });
  }

  deleteMedico(username: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete<any>(`${this.baseURL}/api/Medicos/${username}`, { headers });
  }

  getMedicoActual(): Observable<Medicos> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Medicos>(`${this.baseURL}/api/Medicos/medico`, { headers });
  }

  registro(medico: MedicosDto): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/api/Medicos/registro`, medico);
  }

}
