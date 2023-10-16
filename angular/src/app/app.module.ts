import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { ProcuraComponent } from './views/procura/procura.component';
import { MapapetComponent } from './views/mapapet/mapapet.component';
import { SobrenosComponent } from './views/sobrenos/sobrenos.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SinginComponent } from './singin/singin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioHomeComponent } from './views/usuario-home/usuario-home.component';
import { HistoriasComponent } from './views/historias/historias.component';
import { MatTableModule } from '@angular/material/table';
import { CadastraPetComponent } from './views/cadastra-pet/cadastra-pet.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FileInputConfig, MaterialFileInputModule, NGX_MAT_FILE_INPUT_CONFIG } from 'ngx-material-file-input';
import { ModalPerdidoComponent } from './views/home/modal-perdido/modal-perdido.component';
import { ModalEncontreiComponent } from './views/procura/modal-encontrei/modal-encontrei.component';

export const config: FileInputConfig = {
  sizeUnit: 'Octet'
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProcuraComponent,
    MapapetComponent,
    SobrenosComponent,
    LoginComponent,
    SinginComponent,
    UsuarioComponent,
    UsuarioHomeComponent,
    HistoriasComponent,
    CadastraPetComponent,
    ModalPerdidoComponent,
    ModalEncontreiComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MaterialFileInputModule

  ],
  providers: [{ provide: NGX_MAT_FILE_INPUT_CONFIG, useValue: config }],
  bootstrap: [AppComponent]
})
export class AppModule { }
