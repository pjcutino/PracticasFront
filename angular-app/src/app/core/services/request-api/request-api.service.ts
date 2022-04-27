import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatAll, from, map, mergeMap, Observable } from 'rxjs';
import { IPokemon, IPokemonResponse } from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class RequestAPIService {

  private readonly API = "https://pokeapi.co/api/v2/pokemon/";
  
  constructor(private http: HttpClient) { }

  getPokemons(offset: number, limit: number): Observable<IPokemonResponse> {

    let url = `${this.API}?offset=${offset}&limit=${limit}`;

    return this.http.get<IPokemonResponse>(url);
  } 

  getPokemonById(id: number){
    type pokemonURL = { url: string };
    type response = { results: pokemonURL[] };

    return this.http.get<response>
      (`${this.API}${id}`).pipe(map((pokemonRaw: any) => {

        const pokemon: IPokemon = {
          id: pokemonRaw.id,
          name: pokemonRaw.name,
          spriteUrl: pokemonRaw.sprites.front_default,
          types: pokemonRaw.types.map((type: any) => type.type.name),
          abilities: pokemonRaw.abilities.map((ability: any) => ability.ability.name),
          moves: pokemonRaw.moves.map((move: any) => move.move.name)
        }

        return pokemon;

      }),
      )
  }

  getPokemonByURL(url: string){
    type pokemonURL = { url: string };
    type response = { results: pokemonURL[] };

    return this.http.get<response>
      (`${url}`).pipe(map((pokemonRaw: any) => {

        const pokemon: IPokemon = {
          id: pokemonRaw.id,
          name: pokemonRaw.name,
          spriteUrl: pokemonRaw.sprites.front_default,
          types: pokemonRaw.types.map((type: any) => type.type.name),
          abilities: pokemonRaw.abilities.map((ability: any) => ability.ability.name),
          moves: pokemonRaw.moves.map((move: any) => move.move.name)
        }

        return pokemon;

      }),
      )
  }

}

