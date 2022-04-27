import { Component, Input, OnInit } from '@angular/core';
import { IMega } from 'src/app/core/services/megas-api/models/megas';
import { IPokemon } from 'src/app/core/services/request-api/models/pokemon';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() pokemon!: IPokemon;
  @Input() mega!: IMega;

  constructor() { }

  ngOnInit(): void {
  }

}
