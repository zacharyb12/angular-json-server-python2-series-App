import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GotBooksResponse } from '../../models/got-books-response.model';
import { Observable } from 'rxjs';
import { GotCharactersResponse } from '../../models/got-characters-response.model';
import { GotHousesResponse } from '../../models/got-houses-response.model';

@Injectable({
  providedIn: 'root'
})
export class GotService {
  
  private readonly httpClient = inject(HttpClient);
  private readonly url = 'https://anapioficeandfire.com/api/';


  getAllBooks() : Observable<GotBooksResponse[]> {
    return this.httpClient.get<GotBooksResponse[]>(this.url + 'books');
  }

  getAllCharacters(page: number = 1, pageSize: number = 20) : Observable<GotCharactersResponse[]> {
    return this.httpClient.get<GotCharactersResponse[]>(this.url + 'characters' + '?page=' + page + '&pageSize=' + pageSize);
  }

  getAllHouses() : Observable<GotHousesResponse[]> {
    return this.httpClient.get<GotHousesResponse[]>(this.url + 'houses');
  }
}
