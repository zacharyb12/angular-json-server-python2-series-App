import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LotrService {
  
apiKey = '2EYgtJpZA1ZXLXF4cqU7'

private readonly url = 'https://the-one-api.dev/v2';

private readonly httpClient = inject(HttpClient);


getAllCharacters(page : number, limit : number){
  return this.httpClient.get<any>(`${this.url}/character`, {
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
  return this.httpClient.get<any>(`${this.url}/movie`, {
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
