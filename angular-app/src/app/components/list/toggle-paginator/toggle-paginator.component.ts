import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-paginator',
  templateUrl: './toggle-paginator.component.html',
  styleUrls: ['./toggle-paginator.component.scss']
})
export class TogglePaginatorComponent implements OnInit{
  @Input() page?: number;

  active = 0;

  pages

  constructor() {
    this.pages = Array(Math.floor(151/25)).fill(0).map((x, i) => i);
    this.pages.pop()

  }

  ngOnInit(): void {
  }

  get currentPage (){
    return this.active;
  }
}
