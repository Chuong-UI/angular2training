import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restangular } from 'ng2-restangular';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private restangular: Restangular) { }

  register = () => {
    this.restangular.one('register').post('', this.user)
      .subscribe( () => {
        this.router.navigate(['login']);
        alert('DONE');
      }, () => {
        alert('FAIL');
      });
  }
  
  users = [];
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  


  ngOnInit() {
    this.restangular.one('users').get()
      .subscribe( (users) => {
        this.users = users;
      });
  }

}
