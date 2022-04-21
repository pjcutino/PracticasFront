import { Component, OnInit } from '@angular/core';
import { RequestAPIService } from './services/request-api.service';

@Component({
  selector: 'app-request-api',
  templateUrl: './request-api.component.html',
  styleUrls: ['./request-api.component.scss']
})
export class RequestAPIComponent implements OnInit {
  // declaramos la variable donde almacenamos nuestro responseado
  pokemons: any[] = [];

  // Llamamos a nuestro servicio o inicializamos servicio
  constructor(private requestAPIService: RequestAPIService) {}
  
  // Al arrancar nuestra aplicación:
  ngOnInit(): void {
    // Utilizamos la función getCharacters para guardar nuestros responseados:
    this.requestAPIService.getStarterPokemon()
      .subscribe((response: any) => {
        response.results.forEach((result: any) => {
          this.requestAPIService.getPokemonByName(result.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
            });
      });
    });
  }
}
