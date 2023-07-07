import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user = new User();
  msg='';
  constructor(private service:RegistrationService, private router:Router){
   
  }

  ngOnInit(){

  }

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data=> {
        console.log("response recieved");
        this.service.isLoggedIn.next(true);
        this.service.role.next(data.roles);
        this.router.navigate(['/movie'])
      },
      error=> {
        console.log("exception occured");
       this. msg="Bad credentials, please enter valid id and password"
      }
    )
  }


  gotoregistration(){
    this.router.navigate(['/register'])
  }
}
