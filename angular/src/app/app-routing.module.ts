import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SinginComponent } from './singin/singin.component';
import { HistoriasComponent } from './views/historias/historias.component';
import { HomeComponent } from './views/home/home.component';
import { MapapetComponent } from './views/mapapet/mapapet.component';
import { ProcuraComponent } from './views/procura/procura.component';
import { SobrenosComponent } from './views/sobrenos/sobrenos.component';
import { UsuarioHomeComponent } from './views/usuario-home/usuario-home.component';
import { UsuarioComponent } from './views/usuario/usuario.component';

const routes: Routes = [ 
  {
  path:'home',
  component:HomeComponent
},
{
  path:'procura',
  component:ProcuraComponent
},
{
  path: 'mapa',
  component:MapapetComponent
},
{
  path: 'sobre',
  component:SobrenosComponent
},
{
  path: 'historias',
  component:HistoriasComponent
},
{
  path:'',
  component:LoginComponent
},
{
  path:'singin',
  component: SinginComponent
},
{
  path:'usuario',
  component: UsuarioComponent
},
{
  path:'homeusuario',
  component: UsuarioHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
