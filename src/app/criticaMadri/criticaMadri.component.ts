import { Component, OnInit, ViewChild  } from '@angular/core';
import {PRECADASTRO} from '../mock-preCadastroMadri';
import { PreCadastro } from '../model/preCadastro';

@Component({
  selector: 'app-criticaMadri',
  templateUrl: './criticaMadri.component.html',
  styleUrls: ['./criticaMadri.component.css'],
  template: `<ejs-listview id='sample-list' [dataSource]='data'></ejs-listview>`
})
export class CriticaMadriComponent implements OnInit {

  preCadastro = PRECADASTRO;
  cadastro: PreCadastro = new PreCadastro();

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  publicar(){
    this.preCadastro.push({...this.cadastro});
  }

  limpar(){

  }

  homeImage: string = "assets/images/1.png";
  numaniceImage: string ="assets/images/numanice.jpg";
  malandro5Estrelas: string = "assets/images/malandro5Estrelas.jpg";
  doloresDala: string = "assets/images/doloresDala.jpg";
  elMadrileno: string = "assets/images/elMadrileno.jpg";

}
