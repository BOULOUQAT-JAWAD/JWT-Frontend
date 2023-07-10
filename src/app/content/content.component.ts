import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

	componentToShow: string ;

  constructor(private axiosService: AxiosService){
    if(this.axiosService.getAuthToken() != null)
      this.componentToShow="Logged In";
    else
      this.componentToShow="Welcome";
  }

  onLogin(input: any): void{
    this.axiosService.request(
      "POST",
      "/api/v1/auth/authenticate",
      {
        email: input.email,
        password: input.password
      }
    ).then(
      response => {
          this.axiosService.setAuthToken(response.data.token);
          this.componentToShow = "Logged In";
      }).catch(
      error => {
          this.axiosService.setAuthToken(null);
          this.componentToShow = "welcome";
      });
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
    ).then(
      response => {
          this.axiosService.setAuthToken(response.data.token);
          this.componentToShow = "Logged In";
      }).catch(
      error => {
          this.axiosService.setAuthToken(null);
          this.componentToShow = "welcome";
      });
  }
}
