import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Iuser } from '../models/users.models ';
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  URL_API = `http://localhost:3000/users`
  constructor(
    private http: HttpClient
  ) { }
  addUser(user: Iuser): Observable<Iuser> {
    return this.http.post<Iuser>(`${this.URL_API}`, user);
  }
}
