import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  user = {
    email: '',
    password: '',
  };

  login = () => {
    this.router.navigate(['admin/dashboard']);
  }

  ngOnInit() {
  }

}
