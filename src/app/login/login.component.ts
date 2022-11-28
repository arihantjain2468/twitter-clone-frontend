import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    click:Boolean=true;
    public loginForm: FormGroup;
    Response: any = null;

    constructor(private loginService: LoginService, private router: Router) {
      this.loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required,Validators.maxLength(15)])
      })
    }
  
    onClick = () => {    
      this.Response = this.loginService.login(this.loginForm.value);  
    }
  
}
  