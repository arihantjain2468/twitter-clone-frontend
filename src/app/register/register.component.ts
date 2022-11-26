import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public RegisterForm: FormGroup;
  Response:any; 
  constructor(private loginService: LoginService) {
    this.Response=null;

    this.RegisterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.maxLength(15)])
    })
   }

  ngOnInit(): void {
  }
  onClick = () => {   
    console.log("Values ",this.RegisterForm.value); 
    this.Response = this.loginService.register(this.RegisterForm.value);
    console.log("result", this.Response);
  }


}
