import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MegasApiService } from 'src/app/core/services/megas-api/megas-api.service';
import { IMega } from 'src/app/core/services/megas-api/models/megas';
import { RequestAPIService } from 'src/app/core/services/request-api/request-api.service';

@Component({
  selector: 'app-my-creates',
  templateUrl: './my-creates.component.html',
  styleUrls: ['./my-creates.component.scss']
})
export class MyCreatesComponent {

  public megas: IMega[] = [];
  
  constructor(private megasService: MegasApiService) {}
    
  ngOnInit(): void {
    this.getMegas();
  }

  getMegas(): void {
    this.megasService.getAllMegas().subscribe((data: IMega[]) => {
        this.megas = data;
    });
  }

  removeMega(id: string) {
    console.log("hola");
    this.megasService.deleteMegaById(id).subscribe((data: IMega[]) => {
      this.megas = data;
  });
  }
  

}

