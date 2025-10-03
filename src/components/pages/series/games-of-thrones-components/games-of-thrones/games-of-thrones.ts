import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GotBooksResponse } from '../../../../../core/models/got/got-books-response.model';
import { GotCharactersResponse } from '../../../../../core/models/got/got-characters-response.model';
import { GotHousesResponse } from '../../../../../core/models/got/got-houses-response.model';
import { GotService } from '../../../../../core/services/games-Of-Thrones/got-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-games-of-thrones',
  imports: [
    DatePipe
  ],
  templateUrl: './games-of-thrones.html',
  styleUrl: './games-of-thrones.css'
})
export class GamesOfThrones {

gotBooks : GotBooksResponse[] = [];

gotCharacters : GotCharactersResponse[] = [];

gotHouses : GotHousesResponse[] = [];

currentPage : number = 1;
pageSize : number = 20;

private readonly gotService = inject(GotService);
private readonly router = inject(Router);


constructor() {
  this.gotService.getAllBooks().subscribe({
    next : (response) => {
      this.gotBooks = response;
    }
  })

  // Chargement initial avec pagination
  this.getCharacter(this.currentPage, this.pageSize);

  this.getHouses();

}



previousPage(){
  if (this.currentPage > 1) {
    this.currentPage--;
    this.getCharacter(this.currentPage, this.pageSize);
  }
}

nextPage(){
  // Vous pourriez ajouter une vérification du nombre total de pages ici
  this.currentPage++;
  this.getCharacter(this.currentPage, this.pageSize);
}

getCharacter(page : number, pageSize : number){
  this.gotService.getAllCharacters(page, pageSize).subscribe({
    next : (response) => {
      this.gotCharacters = response;
    }
  })
}

getHouses(){
  this.gotService.getAllHouses().subscribe({
    next : (response) => {
      this.gotHouses = response;
    }
  })
}

navigateToBookDetails(url: string) {
  const id = url.split('books/')[1];
   this.router.navigate(['/series/got-book-details', id]);
}

navigateToCharacterDetails(url: string) {
  const id = url.split('characters/')[1];
  this.router.navigate(['/series/got-character-details', id]);
}

navigateToHouseDetails(url: string) {
  const id = url.split('houses/')[1];  
  this.router.navigate(['/series/got-house-details', id]);
}
}

