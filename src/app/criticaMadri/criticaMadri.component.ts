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

  ngOnInit(): void {}

  publicar(){
    this.preCadastro.push({...this.cadastro});
  }

}
