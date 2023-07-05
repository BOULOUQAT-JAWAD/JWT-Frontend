import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() onSubmitLoginForm = new EventEmitter();

  login: string = "";
  password: string = "";

  onSubmitLogin(): void{
    this.onSubmitLoginForm.emit({"login":this.login,"password":this.password});
  }
}
