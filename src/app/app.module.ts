import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { PoemComponent } from './poem/poem.component';
import { VersoFormularioComponent } from './verso-formulario/verso-formulario.component';
import { VersoComponent } from './verso/verso.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule, MatFormFieldModule, MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { AuthService } from './auth.service';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@NgModule({
  declarations: [
    AppComponent,
    PoemComponent,
    VersoFormularioComponent,
    VersoComponent,
    RegisterComponent,
    RegisterModalComponent,
    LoginModalComponent,
  ],
  imports: [
AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserModule,

    // Componentes externos
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [AuthService, AngularFireDatabase],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterComponent,
    RegisterModalComponent,
    LoginModalComponent,
    AppComponent
  ]
})
export class AppModule { }
