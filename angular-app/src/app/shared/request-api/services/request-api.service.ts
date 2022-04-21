import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// EndPoint
const baseUrl = 'https://pokeapi.co/api/v2/';

// Pokemon petition
const pokemonUrl = `${baseUrl}pokemon`;

@Injectable()
export class RequestAPIService {

  constructor(private http: HttpClient) { }

  getStarterPokemon() {
    return this.http.get(`${pokemonUrl}?limit=9`);
  }
  getPokemonByName(name: string) {
    return this.http.get(`${pokemonUrl}/${name}`);
  }
}
