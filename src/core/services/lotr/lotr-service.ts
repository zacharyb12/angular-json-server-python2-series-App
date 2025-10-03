import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LotrCharacter } from '../../models/lotr/lotr-character.model';
import { LotrMoviesResponse } from '../../models/lotr/lotr-movies-response.model';
import { Observable } from 'rxjs';
import { LotrCharacterResponse } from '../../models/lotr/lotr-character-response.model';

@Injectable({
  providedIn: 'root'
})
export class LotrService {
  
apiKey = '2EYgtJpZA1ZXLXF4cqU7'

private readonly url = 'https://the-one-api.dev/v2';

private readonly httpClient = inject(HttpClient);


getAllCharacters(page : number, limit : number){
  return this.httpClient.get<{docs: LotrCharacter[]}>(`${this.url}/character`, {
    headers : {
      Authorization : `Bearer ${this.apiKey}`
    },
    params : {
      page : page.toString(),
      limit : limit.toString()
    }
  });
}
getCharacterById(id : string) : Observable<LotrCharacterResponse>{
  return this.httpClient.get<LotrCharacterResponse>(`${this.url}/character/${id}`, {
    headers : {
      Authorization : `Bearer ${this.apiKey}`
    }
  });
}


getAllMovies(page : number, limit : number) : Observable<LotrMoviesResponse>{
  return this.httpClient.get<LotrMoviesResponse>(`${this.url}/movie`, {
    headers : {
      Authorization : `Bearer ${this.apiKey}`
    },
    params : {
      page : page.toString(),
      limit : limit.toString()
    }
  });
}
getMovieById(id : string) : Observable<LotrMoviesResponse>{
  return this.httpClient.get<LotrMoviesResponse>(`${this.url}/movie/${id}`, {
    headers : {
      Authorization : `Bearer ${this.apiKey}`
    }
  });
}


}
