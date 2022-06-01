import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/users.models ';
import {UsersService} from 'src/app/services/users.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
      this.usersService.addUser(this.user).subscribe(data => {
        alert(' thêm thành công')
        this.router.navigateByUrl('signin');
      })
  }

}
