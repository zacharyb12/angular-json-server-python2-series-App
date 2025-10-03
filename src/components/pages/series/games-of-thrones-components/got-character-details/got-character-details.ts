import { Component, inject } from '@angular/core';
import { GotCharactersResponse } from '../../../../../core/models/got/got-characters-response.model';
import { ActivatedRoute } from '@angular/router';
import { GotService } from '../../../../../core/services/games-Of-Thrones/got-service';

@Component({
  selector: 'app-got-character-details',
  imports: [],
  templateUrl: './got-character-details.html',
  styleUrl: './got-character-details.css'
})
export class GotCharacterDetails {

  characterId: string | null = null;
  characterDetails: GotCharactersResponse | undefined = undefined;


  private readonly route = inject(ActivatedRoute);
  private readonly gotService = inject(GotService);

  constructor() {
    this.characterId = this.route.snapshot.paramMap.get('id');
    this.getCharacterDetails();
  }

  getCharacterDetails() {
    if (this.characterId) {
      this.gotService.getCharacter(this.characterId).subscribe({
        next: (response) => {
          this.characterDetails = response;
        }
      });
    }
}


}
