import { Component, inject } from '@angular/core';
import { GotService } from '../../../../core/services/games-Of-Thrones/got-service';
import { GotBooksResponse } from '../../../../core/models/got-books-response.model';
import { DatePipe } from '@angular/common';
import { GotCharactersResponse } from '../../../../core/models/got-characters-response.model';
import { GotHousesResponse } from '../../../../core/models/got-houses-response.model';

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


constructor() {
  this.gotService.getAllBooks().subscribe({
    next : (response) => {
      this.gotBooks = response;
    }
  })

  // Chargement initial avec pagination
  this.getCharacter(this.currentPage, this.pageSize);

  this.gotService.getAllHouses().subscribe({
    next : (response) => {
      this.gotHouses = response;
    }
  })
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


}

