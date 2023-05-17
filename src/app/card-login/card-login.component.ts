import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss']
})
export class CardLoginComponent {
  @Output() public enviarUsername = new EventEmitter;
  public username: string;

  constructor(){
    this.username =""
  }

  public getUsername(username:string){
    this.enviarUsername.emit(username);
  }
}
