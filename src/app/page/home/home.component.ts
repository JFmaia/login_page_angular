import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public username:string = ""

  updateUsername(newUsername:string){
    this.username = newUsername;
  }
}
