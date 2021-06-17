import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  pageTitle = 'Log In';
  userName: string = '';

  constructor(form: FormsModule) {}

  ngOnInit(): void {}

  login(): void {
    
  }
}
