import { Component, Input, OnInit } from '@angular/core';
import { IMega } from 'src/app/core/services/megas-api/models/megas';
import { IPokemon } from 'src/app/core/services/request-api/models/pokemon';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {

  @Input() pokemon!: IPokemon;
  @Input() mega!: IMega;

  constructor() { }

  ngOnInit(): void {
  }

}
