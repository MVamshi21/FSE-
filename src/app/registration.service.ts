import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  role=new BehaviorSubject<string>("user");
  isLoggedIn=new BehaviorSubject<boolean>(false);
  
  apilogin=`http://localhost:8000/moviebooking/login`;
  apiregister=`http://localhost:8000/moviebooking/register`;

  public loginUserFromRemote(user :User):Observable<User>{
    return this.http.post<User>(this.apilogin,user)
  }

  public registerUserFromRemote(user :User):Observable<User>{
    return this.http.post<User>(this.apiregister,user)
  }

}

