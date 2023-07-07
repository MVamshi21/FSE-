import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit{

  user = new User();
  msg='';
  constructor(private service:RegistrationService, private router:Router){}

  ngOnInit(){

  }

  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        this.router.navigate(['/login']);
      },
      error=>{
        console.log("exception occured");
        this.router.navigate(['/login']);
      }
    )
  }
}
