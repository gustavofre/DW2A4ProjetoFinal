import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
<<<<<<< HEAD
import { PreCadastroComponent } from './pre-cadastro/pre-cadastro.component';
import { NavbarComponent } from './navbar/navbar.component';
=======
import { CriticaComponent } from './critica/critica.component';
import { CriticaDDGAComponent } from './criticaDDGA/criticaDDGA.component';
import { CriticaMadriComponent } from './criticaMadri/criticaMadri.component';
import { CriticaMalComponent } from './criticaMal/criticaMal.component';

import { PreCadastroComponent } from './pre-cadastro/pre-cadastro.component';
>>>>>>> 8afef9d55b18251c95b9de9fae0714d46c3704a0


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvaliacaoComponent,
<<<<<<< HEAD
    PreCadastroComponent,
    NavbarComponent
=======
    CriticaComponent,
    CriticaDDGAComponent,
    CriticaMadriComponent,
    CriticaMalComponent,
    PreCadastroComponent
>>>>>>> 8afef9d55b18251c95b9de9fae0714d46c3704a0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ListViewModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
