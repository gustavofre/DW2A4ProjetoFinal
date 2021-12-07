import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  homeImage: string = "assets/images/1.png";
  numaniceImage: string ="assets/images/numanice.jpg";
  malandro5Estrelas: string = "assets/images/malandro5Estrelas.jpg";
  doloresDala: string = "assets/images/doloresDala.jpg";
  elMadrileno: string = "assets/images/elMadrileno.jpg";
}
