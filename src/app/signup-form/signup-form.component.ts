import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  @Output() onSubmitSignUpForm = new EventEmitter();

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  role: string = "";

  onSubmitSignUp(): void{
    this.onSubmitSignUpForm.emit({
      "firstname":this.firstname,
      "lastname":this.lastname,
      "email":this.email,
      "password":this.password,
      "role":this.role
    });
  }
}
