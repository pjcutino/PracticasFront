import { Component, Input, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { IMega } from 'src/app/core/services/megas-api/models/megas';
import { IPokemon } from '../../core/services/request-api/models/pokemon';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() pokemon!: IPokemon;
  @Input() megas!: IMega[];
  mega: IMega;

  constructor() {}

  // asign mega if base pokemon name
  ngOnInit(): void {
    this.megas.forEach(element =>{
      if(this.pokemon.name == element.basePokemon){
        this.mega = element;
      }
    })
  }

}
