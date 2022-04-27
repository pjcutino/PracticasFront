import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RequestAPIService } from 'src/app/core/services/request-api/request-api.service';
import { AbilitiesComponent } from './abilities/abilities.component';
import { InfoComponent } from './info/info.component';
import { MovesComponent } from './moves/moves.component';



@NgModule({
  declarations: [DetailComponent, AbilitiesComponent, InfoComponent, MovesComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
  ],
  exports:[DetailComponent],
  providers: [
    RequestAPIService,
  ]
})
export class DetailModule { }
