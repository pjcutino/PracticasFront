import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MegasApiService } from 'src/app/core/services/megas-api/megas-api.service';
import { IMega } from 'src/app/core/services/megas-api/models/megas';
import { RequestAPIService } from 'src/app/core/services/request-api/request-api.service';
import { IPokemon, IPokemonResponse, IPokemonURL } from '../../core/services/request-api/models/pokemon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  public pokemons: IPokemon[] = [];
  public megas: IMega[] = [];
  private offset = 0;
  public limit = 151;
  searchText: string = '';
  currentPage : number = 0;
  
  constructor(private pokemonService: RequestAPIService, private megasService: MegasApiService, private cd: ChangeDetectorRef) {}
    
  ngOnInit(): void {
    this.getMegas();
    this.getPokemons();
    this.cd.detectChanges();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons(this.offset, this.limit)
    .subscribe((data: IPokemonResponse) => {
      const results: IPokemonURL[] = data.results;
      results.forEach(element => {
        this.pokemonService.getPokemonByURL(element.url)
        .subscribe((pokemon: IPokemon) => {
          this.pokemons.push(pokemon);
        })
      })
    });
    
    this.offset += this.limit;
  }

  getMegas(): void {
    this.megasService.getAllMegas().subscribe((data: IMega[]) => {
        this.megas = data;
    });
  }

}