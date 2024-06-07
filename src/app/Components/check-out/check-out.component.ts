import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../Services/card.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent implements OnInit {
  cartId:any='';
constructor(private _FormBuilder:FormBuilder,private _ActivatedRoute:ActivatedRoute,private _CardService:CardService){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
      this.cartId= params.get('id');
      }
    })
  }
checkoutForm : FormGroup=this._FormBuilder.group({
  details:[''],
  phone:[''],
  city:['']
})

handleForm():void{
this._CardService.checkOut(this.cartId,this.checkoutForm.value).subscribe({
  next:(response)=>{
    if(response.status=='success'){
      window.open(response.session.url,'_self');
    }
  }
})
}

}
