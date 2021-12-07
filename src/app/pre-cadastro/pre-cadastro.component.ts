import { Component, OnInit, } from '@angular/core';
import { PRECADASTRO } from '../mock-preCadastro';

@Component({
  selector: 'app-pre-cadastro',
  templateUrl: './pre-cadastro.component.html',
  styleUrls: ['./pre-cadastro.component.css']
})
export class PreCadastroComponent implements OnInit {

  preCadastro = PRECADASTRO;
  constructor() { }

  ngOnInit(): void {
  }
}
