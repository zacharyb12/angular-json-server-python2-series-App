import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series-list',
  imports: [],
  templateUrl: './series-list.html',
  styleUrl: './series-list.css'
})
export class SeriesList {


  private readonly router = inject(Router);


  redirectToGameOfThrones(){
    this.router.navigate(['/series/game-of-thrones']);
  }

    redirectToLotr(){
    this.router.navigate(['/series/Lotr']);
  }

    redirectToFuturama(){
    this.router.navigate(['/series/futurama']);
  }

}
