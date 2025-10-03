import { Component, inject } from '@angular/core';
import { LotrMovies } from '../../../../../core/models/lotr/lotr-movies.model';
import { ActivatedRoute } from '@angular/router';
import { LotrService } from '../../../../../core/services/lotr/lotr-service';

@Component({
  selector: 'app-lotr-movie-details',
  imports: [],
  templateUrl: './lotr-movie-details.html',
  styleUrl: './lotr-movie-details.css'
})
export class LotrMovieDetails {

  id : string | null = null;
  movie : LotrMovies | null = null;

  private readonly route = inject(ActivatedRoute);
  private readonly lotrService = inject(LotrService);

  constructor() {
this.id = this.route.snapshot.paramMap.get('id');
this.getMovieDetails();
  }

getMovieDetails(){
  if(this.id){
    this.lotrService.getMovieById(this.id).subscribe({
      next : (data) => {
        this.movie = data.docs[0];
      }
    })
  }
  }

}
