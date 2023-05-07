import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs';
import { PacientesDto } from '../models/pacientes-dto';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacientesService {
  private readonly baseURL: string;

  constructor(config: ApiConfiguration) {
    this.baseURL = config.rootUrl;
  }

  /**
   * Path part for operation apiPacientesGet
   */
  static readonly ApiPacientesGetPath = '/api/Pacientes';

  async apiPacientesGet(): Promise<Array<PacientesDto>> {
    const url = `${this.baseURL}/api/Pacientes`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
  
    const response: AxiosResponse<Array<PacientesDto>> = await axios.get(url, { headers });
    return response.data;
  }

  /**
   * Path part for operation apiPacientesUsernameGet
   */
  static readonly ApiPacientesUsernameGetPath = '/api/Pacientes/{username}';

  async apiPacientesUsernameGet(username: string): Promise<PacientesDto> {
    const url = `${this.baseURL}${PacientesService.ApiPacientesUsernameGetPath.replace('{username}', username)}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
  

    const response: AxiosResponse<PacientesDto> = await axios.get(url, {headers});
    return response.data;
  }

  /**
   * Path part for operation apiPacientesUsernamePut
   */
  static readonly ApiPacientesUsernamePutPath = '/api/Pacientes/{username}';

  async apiPacientesUsernamePut(username: string, body: PacientesDto): Promise<void> {
    const url = `${this.baseURL}${PacientesService.ApiPacientesUsernamePutPath.replace('{username}', username)}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
  

    await axios.put(url, body, {headers});
  }

  static readonly ApiPacientesPacienteGetPath = '/api/Pacientes/paciente';

  static readonly ApiPacientesRegistroPostPath = '/api/Pacientes/registro';

  

  deletePaciente(username: string): Observable<any> {
    const url = `${this.baseURL}/api/Pacientes/${username}`;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return from(axios.delete(url, { headers }));
  }

  public async obtenerPaciente(): Promise<PacientesDto> {
    const url = `${this.baseURL}/api/Pacientes/paciente`;
    const headers = {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    };
    const response = await axios.get<PacientesDto>(url,{ headers });
    return response.data;
  }

  public async registrarPaciente(paciente: PacientesDto): Promise<void> {
    const url = `${this.baseURL}/api/Pacientes/registro`;
    await axios.post(url, paciente);
  }

}

