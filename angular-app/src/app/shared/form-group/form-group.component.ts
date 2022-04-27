import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MegasApiService } from 'src/app/core/services/megas-api/megas-api.service';
import { IMega } from 'src/app/core/services/megas-api/models/megas';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  @Input() megaForm!: FormGroup;
  @Input() onSubmit!: Function;
  @Input() pokemonId!: string;

  constructor(private router:Router, private megasService: MegasApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
}
