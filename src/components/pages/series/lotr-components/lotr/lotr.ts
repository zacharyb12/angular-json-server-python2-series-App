import { Component, inject } from '@angular/core';
import { LotrService } from '../../../../../core/services/lotr/lotr-service';
import { LotrCharacter } from '../../../../../core/models/lotr/lotr-character.model';
import { LotrMovies } from '../../../../../core/models/lotr/lotr-movies.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lotr',
  imports: [],
  templateUrl: './lotr.html',
  styleUrl: './lotr.css'
})
export class Lotr {

characters : LotrCharacter[] = [];
movies : LotrMovies[] = [];

  private readonly lotrService = inject(LotrService);
  private readonly router = inject(Router);

  constructor() {
this.getCharacters();
this.getMovies();
  }

  getCharacters() {
    this.lotrService.getAllCharacters(1, 10).subscribe({
      next: (data) => {
        this.characters = data.docs;
      }
    })
  }

  getMovies(){
    this.lotrService.getAllMovies(1,5).subscribe({
      next : (data) => {
        this.movies = data.docs;
      }
    })
  }

  navigateToCharacterDetails(id: string) {
    this.router.navigate(['/series/lotr-character-details', id]);
}

  navigateToMovieDetails(id: string) {
    this.router.navigate(['/series/lotr-movie-details', id]);
  }

}
