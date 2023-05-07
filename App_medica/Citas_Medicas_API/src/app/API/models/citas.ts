/* tslint:disable */
/* eslint-disable */
import { Diagnosticos } from './diagnosticos';
import { Medicos } from './medicos';
import { Pacientes } from './pacientes';
export interface Citas {
  diagnostico?: Diagnosticos;
  fecha?: string;
  id?: number;
  medico?: Medicos;
  observaciones?: null | string;
  paciente?: Pacientes;
  usuariomedico?: null | string;
  usuariopaciente?: null | string;
}
