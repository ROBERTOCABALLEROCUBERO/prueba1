/* tslint:disable */
/* eslint-disable */
import { Citas } from './citas';
export interface Pacientes {
  apellidos?: null | string;
  citas?: null | Array<Citas>;
  clave?: null | string;
  direccion?: null | string;
  nombre?: null | string;
  numSeguridadSocial?: null | string;
  numTarjeta?: null | string;
  telefono?: null | string;
  usuario?: null | string;
}
