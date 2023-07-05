import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(private axiosService: AxiosService){}

  onLogin(input: any): void{
    this.axiosService.request(
      "POST",
      "/api/v1/auth/authenticate",
      {
        login: input.login,
        password: input.password
      }
    )
  }

  onSignUp(input: any): void{
    this.axiosService.request(
      "POST",
      "/api/v1/auth/register",
      {
        firstname: input.firstname,
        lastname: input.lastname,
        email: input.email,
        password: input.password
      }
    )
  }
}
