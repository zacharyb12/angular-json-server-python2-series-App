import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GotBooksResponse } from '../../models/got/got-books-response.model';
import { Observable } from 'rxjs';
import { GotCharactersResponse } from '../../models/got/got-characters-response.model';
import { GotHousesResponse } from '../../models/got/got-houses-response.model';

@Injectable({
  providedIn: 'root'
})
export class GotService {
  
  private readonly httpClient = inject(HttpClient);
  private readonly url = 'https://anapioficeandfire.com/api/';


  getAllBooks() : Observable<GotBooksResponse[]> {
    return this.httpClient.get<GotBooksResponse[]>(this.url + 'books');
  }
  getBookDetails(id : string){    
    return this.httpClient.get<GotBooksResponse>(this.url + 'books/' + id);
  }


  getAllCharacters(page: number = 1, pageSize: number = 20) : Observable<GotCharactersResponse[]> {
    return this.httpClient.get<GotCharactersResponse[]>(this.url + 'characters' + '?page=' + page + '&pageSize=' + pageSize);
  }
  getCharacter(id : string) : Observable<GotCharactersResponse> {
    return this.httpClient.get<GotCharactersResponse>(this.url + 'characters/' + id);
  }

  getAllHouses() : Observable<GotHousesResponse[]> {
    return this.httpClient.get<GotHousesResponse[]>(this.url + 'houses');
  }
  getHouse(id : string) : Observable<GotHousesResponse> {
    return this.httpClient.get<GotHousesResponse>(this.url + 'houses/' + id);
  }

}
