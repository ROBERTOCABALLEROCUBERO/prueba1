import axios from 'axios';
import { Observable } from 'rxjs';
import { Citas, CitasDto } from '../models';
import { Injectable } from '@angular/core';
import { ApiConfiguration } from '../api-configuration';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private readonly baseURL: string;

  constructor(config: ApiConfiguration) {
    this.baseURL = config.rootUrl;
  }

  public getCitas(): Observable<Citas[]> {
    const url = `${this.baseURL}/api/Citas`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.get<Citas[]>(url, { headers }).then(response => response.data));
  }

  public getCitasById(id: number): Observable<CitasDto> {
    const url = `${this.baseURL}/api/Citas/${id}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.get<CitasDto>(url, { headers }).then(response => response.data));
  }

  public insertCitas(citas: CitasDto): Observable<CitasDto> {
    const url = `${this.baseURL}/api/Citas`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.post<CitasDto>(url, citas, { headers }).then(response => response.data));
  }

  public updateCitas(id: number, citas: CitasDto): Observable<CitasDto> {
    const url = `${this.baseURL}/api/Citas/${id}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.put<CitasDto>(url, citas, { headers }).then(response => response.data));
  }

  public deleteCitas(id: number): Observable<boolean> {
    const url = `${this.baseURL}/api/Citas/${id}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.delete<boolean>(url, { headers }).then(response => response.data));
  }

  public getCitasByPaciente(pacienteNombre: string): Observable<CitasDto[]> {
    const url = `${this.baseURL}/api/Citas/paciente/${pacienteNombre}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.get<CitasDto[]>(url, { headers }).then(response => response.data));
  }

  public getCitasByMedico(medicoNombre: string): Observable<CitasDto[]> {
    const url = `${this.baseURL}/api/Citas/medico/${medicoNombre}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.get<CitasDto[]>(url, { headers }).then(response => response.data));
  }
}
