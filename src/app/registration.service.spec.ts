import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RegistrationService } from './registration.service';
import { User } from './user';
import { of } from 'rxjs';
import { LoginComponent } from './login/login.component';

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should registerUser',() => {
    const user={id:12,
                username:"rashmi",
                password:"rashmi",
                role:"admin",
                fullname:"rashmi",
                firstPet:"dog"
              };
    spyOn(service,"registerUserFromRemote").and.returnValue(of(user));
    service.registerUserFromRemote(user).subscribe(data => {
      expect(data).toEqual(user);
    })
  });
});
