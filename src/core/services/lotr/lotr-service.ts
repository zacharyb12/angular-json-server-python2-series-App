import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LotrCharacter } from '../../models/lotr-character.model';
import { LotrMoviesResponse } from '../../models/lotr-movies-response.model';

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

getAllMovies(page : number, limit : number){
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


}
