import { Component, inject } from '@angular/core';
import { GotHousesResponse } from '../../../../../core/models/got/got-houses-response.model';
import { GotService } from '../../../../../core/services/games-Of-Thrones/got-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-got-house-details',
  imports: [],
  templateUrl: './got-house-details.html',
  styleUrl: './got-house-details.css'
})
export class GotHouseDetails {

id : string |null = null;
house : GotHousesResponse | undefined;

private readonly gotService = inject(GotService);
private readonly route = inject(ActivatedRoute);

constructor() {
  this.id = this.route.snapshot.paramMap.get('id');
  this.getHouseDetails();
}


getHouseDetails(){
  if(this.id){
    this.gotService.getHouse(this.id).subscribe({
      next : (response) => {
        this.house = response;
      }
    })
  }

}
}
