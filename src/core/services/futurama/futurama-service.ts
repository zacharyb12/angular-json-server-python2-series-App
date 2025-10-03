import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FuturamaCharacterResponse } from '../../models/futurama/character-response.model';
import { Observable } from 'rxjs';
import { FuturamaEpisodeResponse } from '../../models/futurama/episode-response.model';

@Injectable({
  providedIn: 'root'
})
export class FuturamaService {
  
  private url = 'https://api.sampleapis.com/futurama/';


  private readonly httpClient = inject(HttpClient);


  getFuturamaCharacters() : Observable<FuturamaCharacterResponse[]> {
    const rnd = Math.floor(Math.random());
    return this.httpClient.get<FuturamaCharacterResponse[]>(this.url + 'characters');
  }

  getFuturamaCharacterById(id: string): Observable<FuturamaCharacterResponse> {
    return this.httpClient.get<FuturamaCharacterResponse>(this.url + 'characters/' + id);
  }

  getFuturamaEpisodes() : Observable<FuturamaEpisodeResponse[]> {
    return this.httpClient.get<FuturamaEpisodeResponse[]>(this.url + 'episodes');
  }

  getFuturamaEpisodeById(id: string): Observable<FuturamaEpisodeResponse> {
    return this.httpClient.get<FuturamaEpisodeResponse>(this.url + 'episodes/' + id);
  }


}
