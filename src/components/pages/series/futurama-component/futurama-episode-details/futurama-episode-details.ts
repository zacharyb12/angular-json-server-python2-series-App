import { Component, inject } from '@angular/core';
import { FuturamaEpisodeResponse } from '../../../../../core/models/futurama/episode-response.model';
import { ActivatedRoute } from '@angular/router';
import { FuturamaService } from '../../../../../core/services/futurama/futurama-service';

@Component({
  selector: 'app-futurama-episode-details',
  imports: [],
  templateUrl: './futurama-episode-details.html',
  styleUrl: './futurama-episode-details.css'
})
export class FuturamaEpisodeDetails {

  episode : FuturamaEpisodeResponse | undefined;
  id : string | null;

  private readonly route = inject(ActivatedRoute);
  private readonly futuramaService = inject(FuturamaService);

  constructor() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getEpisode();
  }

  getEpisode(){
    if(this.id){
      this.futuramaService.getFuturamaEpisodeById(this.id).subscribe({
        next : (response) => {
          this.episode = response;
        },
        error : (error) => {
          console.log(error);
        }
      })
    }

  }
  
}
