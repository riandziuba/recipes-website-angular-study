import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { ConteudoComponent } from './conteudo/conteudo.component';

const routes: Routes = [
{ path: 'main/:id', component: MainbodyComponent },
{ path: 'conteudo/:id', component: ConteudoComponent},
{ path: '', redirectTo: '/main/0', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
