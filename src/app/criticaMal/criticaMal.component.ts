import { Component, OnInit, ViewChild  } from '@angular/core';
import {PRECADASTRO} from '../mock-preCadastro';
import { PreCadastro } from '../model/preCadastro';

@Component({
  selector: 'app-criticaMal',
  templateUrl: './criticaMal.component.html',
  styleUrls: ['./criticaMal.component.css'],
  template: `<ejs-listview id='sample-list' [dataSource]='data'></ejs-listview>`
})
export class CriticaMalComponent implements OnInit {

  preCadastro = PRECADASTRO;
  cadastro: PreCadastro = new PreCadastro();

  constructor() { }

  ngOnInit(): void {}

  publicar(){
    this.preCadastro.push({...this.cadastro});
  }

}
