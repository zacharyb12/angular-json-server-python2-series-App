import { Component, inject } from '@angular/core';
import { LotrService } from '../../../../../core/services/lotr/lotr-service';
import { ActivatedRoute } from '@angular/router';
import { LotrCharacter } from '../../../../../core/models/lotr/lotr-character.model';

@Component({
  selector: 'app-lotr-character-details',
  imports: [],
  templateUrl: './lotr-character-details.html',
  styleUrl: './lotr-character-details.css'
})
export class LotrCharacterDetails {


  id : string | null = null;
  character : LotrCharacter | undefined;

  private readonly lotrService = inject(LotrService);
  private readonly route = inject(ActivatedRoute);


  constructor() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCharacterDetails();
  }


  getCharacterDetails(){
    if (this.id) {
      this.lotrService.getCharacterById(this.id).subscribe({
        next: (data) => {
          this.character = data.docs[0];
        }
      });
    }
  }
  }
