import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MegasApiService } from 'src/app/core/services/megas-api/megas-api.service';
import { IMega } from 'src/app/core/services/megas-api/models/megas';

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.scss']
})
export class ModifyFormComponent implements OnInit{

  public megaForm: FormGroup = null;
  public submitted: boolean = false;
  public pokemonId: string;

  constructor(private router:Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private megasService: MegasApiService) {
    
    this.megaForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(20)]],
        imageUrl: ['', [Validators.required, Validators.minLength(10)]],
        basePokemon: ['', [Validators.required, Validators.maxLength(20)]],
      });
   }
   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokemonId = params.get('pokemonId')!;
    })
    this.megasService.getMega(this.pokemonId).subscribe((data: IMega) => {
      this.megaForm.get('name').setValue(data.name); 
      this.megaForm.get('imageUrl').setValue(data.imageUrl); 
      this.megaForm.get('basePokemon').setValue(data.basePokemon); 
    });
    }

   public onSubmit(): void {
    this.submitted = true;
    if (this.megaForm.valid) {
      this.megasService.updateMega(this.pokemonId,this.megaForm.get('name').value,this.megaForm.get('imageUrl').value,this.megaForm.get('basePokemon').value);

      this.router.navigate(['/my-creates'])
      alert("Mega Modified");

      this.megaForm.reset();
      this.submitted = false;
    }
  }
}
