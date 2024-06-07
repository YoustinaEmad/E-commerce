import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.css'
})
export class NavBlankComponent {
  constructor(private _AuthService:AuthService)
  {
  }
  logOutUser():void{
    this._AuthService.logOut();
  }
}
