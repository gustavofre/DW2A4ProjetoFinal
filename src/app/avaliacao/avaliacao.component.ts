import { Component, OnInit, ViewChild  } from '@angular/core';
import {PRECADASTRO} from '../mock-preCadastro';
import { PreCadastro } from '../model/preCadastro';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css'],
  template: `<ejs-listview id='sample-list' [dataSource]='data'></ejs-listview>`
})
export class AvaliacaoComponent implements OnInit {

  preCadastro = PRECADASTRO;
  cadastro: PreCadastro = new PreCadastro();

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  publicar(){
    this.preCadastro.push({...this.cadastro});
  }

}
