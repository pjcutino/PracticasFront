import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from 'src/app/core/services/request-api/models/pokemon';
import { RequestAPIService } from 'src/app/core/services/request-api/request-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  pokemonId: string = '';
  pokemon?: IPokemon;

  constructor(private route: ActivatedRoute, private pokemonService: RequestAPIService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokemonId = params.get('pokemonId')!
      this.pokemonService.getPokemonById(Number(this.pokemonId))
      .subscribe(pokemon => this.pokemon = pokemon);
    });
    
  }

}
