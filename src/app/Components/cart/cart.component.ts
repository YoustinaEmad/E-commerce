import { Component, OnInit } from '@angular/core';
import { CardService } from '../../Services/card.service';
import { response } from 'express';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cardData: any = {};
  constructor(private _CardService: CardService) { }
  ngOnInit(): void {
    this._CardService.getUserCard().subscribe({
      next: (response) => {
        this.cardData = response.data
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  removeCartProduct(productId: string): void {
    this._CardService.removeItem(productId).subscribe({
      next: (response) => {
        this.cardData = response.data
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  changeCount(productId:string,productCount:number):void{
    if(productCount>0)
      {
        this._CardService.updateItem(productId,productCount).subscribe({
          next:(response)=>{
            this.cardData=response.data
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }
    
  }
}
