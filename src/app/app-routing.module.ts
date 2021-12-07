import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { CriticaComponent } from './critica/critica.component';
import { CriticaDDGAComponent } from './criticaDDGA/criticaDDGA.component';
import { CriticaMadriComponent } from './criticaMadri/criticaMadri.component';
import { CriticaMalComponent } from './criticaMal/criticaMal.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'avaliacao', component: AvaliacaoComponent},
  {path: 'critica', component: CriticaComponent},
  {path: 'criticaDDGA', component: CriticaDDGAComponent},
  {path: 'criticaMadri', component: CriticaMadriComponent},
  {path: 'criticaMal', component: CriticaMalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
