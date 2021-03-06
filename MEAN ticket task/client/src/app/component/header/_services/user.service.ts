import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../_classes/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  registerUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    // console.log(user.firstName)
    return this.http.post("http://localhost:3000/user/signup",user,{headers: headers});
  }

  getProfile(): Observable<any> {
    this.authService.loadToken();
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.authToken
    });
    return this.http.get("http://localhost:3000/users/profile", {headers: headers});
  }
}
