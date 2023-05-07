import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PacienteMainComponent } from './paciente-main/paciente-main.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import { MedicoMainComponent } from './medico-main/medico-main.component';
import { RegistrarMedicoComponent } from './registrar-medico/registrar-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [ { path: '', component: InicioComponent }, { path: 'login', component: LoginComponent }, 
{ path: 'paciente', component: PacienteMainComponent }, { path: 'agendarcita', component: AgendarCitaComponent }, { path: 'editar', component: EditarPerfilComponent }, 
{ path: 'registropaciente', component: RegistroPacientesComponent }, { path: 'editar', component: EditarPerfilComponent }, { path: 'medico', component: MedicoMainComponent },
{ path: 'registromedico', component: RegistrarMedicoComponent }, { path: 'editarmedico', component: EditarMedicoComponent }, { path: 'admin', component: AdminComponent }  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
