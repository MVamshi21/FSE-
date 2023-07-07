import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

   constructor(private router:Router,
    private service:RegistrationService){
      this.service.isLoggedIn.subscribe(
        data=>{
            this.loggedIn=data;
            return data;
        }
      );
    }
    
     loggedIn: boolean=false;    
   
   logOut():void{
      this.service.isLoggedIn.next(false)
      this.router.navigate(['/home'])
    }  
}
