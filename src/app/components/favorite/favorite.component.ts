import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../Service/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(private FavoriteService : FavoriteService) { }
  public products: any = [];

  ngOnInit(): void {
    this.FavoriteService.getProducts().subscribe(
      data => {
        this.products = data ;
        console.log('get p', );
      },
      
      error => {
        console.log('server id down', error);
      })    

  }

  

  removeItem(item: any){
    this.FavoriteService.removefavoriteItem("").subscribe(
      data => {
        console.log('Request is parent ', data   );
      },
      error => {
        console.log('server id down', error);
      })
  }
  





}
