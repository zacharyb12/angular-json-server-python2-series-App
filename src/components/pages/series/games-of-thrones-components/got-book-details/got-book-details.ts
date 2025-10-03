import { Component, inject } from '@angular/core';
import { GotBooksResponse } from '../../../../../core/models/got/got-books-response.model';
import { GotService } from '../../../../../core/services/games-Of-Thrones/got-service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-got-book-details',
  imports: [
    DatePipe
  ],
  templateUrl: './got-book-details.html',
  styleUrl: './got-book-details.css'
})
export class GotBookDetails {

id : string = '';

book : GotBooksResponse | undefined;

private readonly gotService = inject(GotService);
private readonly route = inject(ActivatedRoute);


constructor() {
  this.id = this.route.snapshot.params['id'];

  this.getBookDetails();

}


getBookDetails(){
  this.gotService.getBookDetails(this.id).subscribe({
    next : (response) => {
      this.book = response;
    }
  })
}

}
