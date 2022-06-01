import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/users.models ';
import {UsersService} from 'src/app/services/users.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: Iuser = {
    name: "",
    email: "",
    password: 0
   }
  constructor(
    private usersService : UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.usersService.signin(this.user).subscribe(data => {
      localStorage.setItem("user", JSON.stringify(this.user));
      alert(' ĐĂng nhập thành công')
      this.router.navigateByUrl('/');
    })
}
}
