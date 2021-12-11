import { Component, OnInit, ViewChild  } from '@angular/core';
import {PRECADASTRO} from '../mock-preCadastroLud';
import { PreCadastro } from '../modu/PreCadastro';

@Component({
  selector: 'app-critica',
  templateUrl: './critica.component.html',
  styleUrls: ['./critica.component.css'],
  template: `<ejs-listview id='sample-list' [dataSource]='data'></ejs-listview>`
})
export class CriticaComponent implements OnInit {

  preCadastro = PRECADASTRO;
  cadastro: PreCadastro = new PreCadastro();

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  publicar(){
    this.preCadastro.push({...this.cadastro});
  }
  homeImage: string = "assets/images/1.png";
  numaniceImage: string ="assets/images/numanice.jpg";
  malandro5Estrelas: string = "assets/images/malandro5Estrelas.jpg";
  doloresDala: string = "assets/images/doloresDala.jpg";
  elMadrileno: string = "assets/images/elMadrileno.jpg";

}
