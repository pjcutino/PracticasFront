import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/core/services/request-api/models/pokemon';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent implements OnInit {

  @Input() pokemon!: IPokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
