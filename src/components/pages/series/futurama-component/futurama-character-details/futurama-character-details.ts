import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuturamaService } from '../../../../../core/services/futurama/futurama-service';
import { FuturamaCharacterResponse } from '../../../../../core/models/futurama/character-response.model';

@Component({
  selector: 'app-futurama-character-details',
  imports: [],
  templateUrl: './futurama-character-details.html',
  styleUrl: './futurama-character-details.css'
})
export class FuturamaCharacterDetails {

character : FuturamaCharacterResponse | undefined;
id : string | undefined;

private readonly route = inject(ActivatedRoute);
private readonly futuramaService = inject(FuturamaService);

constructor() {
  this.id = this.route.snapshot.params['id'];
  this.getCharacterDetails();
}

getCharacterDetails(){
  if(this.id){

    this.futuramaService.getFuturamaCharacterById(this.id).subscribe({
      next : (response) => {
        this.character = response;
      },
      error : (error) => {
        console.log(error);
      }
    });
  }
}


}
