import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MegasApiService } from 'src/app/core/services/megas-api/megas-api.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  public megaForm: FormGroup = null;
  public submitted: boolean = false;

  constructor(private router:Router, private formBuilder: FormBuilder, private megasService: MegasApiService) {
      this.megaForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(20)]],
        imageUrl: ['', [Validators.required]],
        basePokemon: ['', [Validators.required, Validators.maxLength(20)]],
      });
   }

   public onSubmit(): void {
    this.submitted = true;
    if (this.megaForm.valid) {
      
      this.megasService.addMega(this.megaForm.get('name').value,this.megaForm.get('imageUrl').value,this.megaForm.get('basePokemon').value);
      this.router.navigate(['/my-creates']);
      alert("Mega Created");

      this.megaForm.reset();
      this.submitted = false;
    }
  }
}
