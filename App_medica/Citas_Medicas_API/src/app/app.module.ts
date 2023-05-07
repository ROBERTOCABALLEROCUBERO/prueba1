import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from './API/services/login.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PacienteMainComponent } from './paciente-main/paciente-main.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import { MedicoMainComponent } from './medico-main/medico-main.component';
import { DiagnosticoModalComponentComponent } from './diagnostico-modal-component/diagnostico-modal-component.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrarMedicoComponent } from './registrar-medico/registrar-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    PacienteMainComponent,
    MedicoMainComponent,
    DiagnosticoModalComponentComponent,
    AgendarCitaComponent,
    EditarPerfilComponent,
    RegistroPacientesComponent,
    EditarPerfilComponent,
    RegistrarMedicoComponent,
    EditarMedicoComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
        allowedDomains: ['example.com'],
        disallowedRoutes: ['example.com/login'],
      },
    }),
    ReactiveFormsModule
  ],
  providers: [LoginService, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
