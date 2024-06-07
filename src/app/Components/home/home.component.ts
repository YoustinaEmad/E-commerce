import { Component, OnInit } from '@angular/core';
import { EcommDataService } from '../../Services/ecomm-data.service';
import { Product } from '../../Interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CardService } from '../../Services/card.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private _EcommDataService: EcommDataService,
    private _CardService:CardService,private _ToastrService:ToastrService) { }
  products:Product[]=[];
  categories:any[]=[];
  searchTerm:string='';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }


  mainSlider: OwlOptions = {
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

  ngOnInit(): void {
    this._EcommDataService.getAllProducts().subscribe({
      next: (response) => {
        this.products=response.data
      },
    })

    this._EcommDataService.getAllCategories().subscribe({
      next:(response)=>{
        this.categories=response.data;
      }
    })
  }


  addToCard(id:string):void{
    this._CardService.addToCard(id).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message);
      }
    })
  }


}
