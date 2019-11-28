import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ConteudoComponent } from './conteudo/conteudo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainbodyComponent,
    MainheaderComponent,
    MainfooterComponent,
    CardComponent,
    HomeComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
