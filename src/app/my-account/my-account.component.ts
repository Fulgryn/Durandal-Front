import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Message } from 'primeng/api';
import { PasswordValidation } from '../password-validation';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  connectedUser: User;

  constructor(private userService: UserService, private appService: AppService, private router: Router) { 
    this.connectedUser = new User("", "", "", "", "", 0, new Date());
  }

  ngOnInit() {
    if (this.appService.access.email != "") {
      this.userService.getUserByEmail(this.appService.access.email).subscribe(u => this.connectedUser = u);
    }    
  }

  onSubmit(){
    this.userService.updateUser(this.connectedUser).subscribe();
    this.appService.logout(() => {this.router.navigateByUrl('/')});
  }

}
