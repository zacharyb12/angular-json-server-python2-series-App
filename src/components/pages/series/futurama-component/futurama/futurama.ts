import { Component, inject } from '@angular/core';
import { FuturamaCharacterResponse } from '../../../../../core/models/futurama/character-response.model';
import { FuturamaEpisodeResponse } from '../../../../../core/models/futurama/episode-response.model';
import { FuturamaService } from '../../../../../core/services/futurama/futurama-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-futurama',
  imports: [],
  templateUrl: './futurama.html',
  styleUrl: './futurama.css'
})
export class Futurama {

  characters :  FuturamaCharacterResponse[] = [];
  episodes : FuturamaEpisodeResponse[] = [];

  private readonly futuramaService = inject(FuturamaService);
  private readonly router = inject(Router);

  constructor() {
    this.getCharacters();
    this.getEpisodes();
  }

  getCharacters() {
    this.futuramaService.getFuturamaCharacters().subscribe({
      next : (response) => {
        this.characters = response;        
      },
      error : (error) => {
        console.log(error);
      }
    })
  }
  navigateToCharacterDetails(id : number) {
    this.router.navigate(['/series/futurama-character-details', id]);
  }

  getEpisodes() {
    this.futuramaService.getFuturamaEpisodes().subscribe({
      next : (response) => {
        this.episodes = response;
      },
      error : (error) => {
        console.log(error);
      }
    })
  }
  navigateToEpisodeDetails(id : number) {
    this.router.navigate(['/series/futurama-episode-details', id]);
  }

}
