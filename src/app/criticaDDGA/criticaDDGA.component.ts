import { Component, OnInit, ViewChild  } from '@angular/core';
import {PRECADASTRO} from '../mock-preCadastroDDGA';
import { PreCadastro } from '../model/preCadastro';

@Component({
  selector: 'app-criticaDDGA',
  templateUrl: './criticaDDGA.component.html',
  styleUrls: ['./criticaDDGA.component.css'],
  template: `<ejs-listview id='sample-list' [dataSource]='data'></ejs-listview>`
})
export class CriticaDDGAComponent implements OnInit {

  preCadastro = PRECADASTRO;
  cadastro: PreCadastro = new PreCadastro();

  constructor() { }

  ngOnInit(): void {}

  publicar(){
    this.preCadastro.push({...this.cadastro});
  }

}
