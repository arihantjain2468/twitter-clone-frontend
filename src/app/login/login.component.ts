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
  
    Login() {
      console.log("Display details:" + JSON.stringify(this.loginForm.value));
    }

    onClick = () => {    
      this.Response = this.loginService.login(this.loginForm.value);
      console.log("result", this.Response);
  
      // if (this.Response != null) {
      //   console.log("result", this.Response);
  
      //   if (this.Response.result == 1) {
      //     this.click=false;
      //     this.router.navigate(['/nav']);
      //   }
      // }
    }
  
}
  