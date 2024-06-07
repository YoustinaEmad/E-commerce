import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommDataService } from '../../Services/ecomm-data.service';
import { Product } from '../../Interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  productDetails:Product={} as Product;

  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    items:1,
    nav: false
  }

  constructor(private _ActivatedRoute: ActivatedRoute ,private _EcommDataService:EcommDataService) { }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let idProduct:any= params.get('id');
        this._EcommDataService.getProductDetails(idProduct).subscribe({
          next:(response)=>{
            this.productDetails= response.data;
          },
          error:(err)=>{

          }
        })
      },
      error: (err) => {

      }
    })
  }

}
