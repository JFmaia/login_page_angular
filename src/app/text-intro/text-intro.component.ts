import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-intro',
  templateUrl: './text-intro.component.html',
  styleUrls: ['./text-intro.component.scss']
})
export class TextIntroComponent {
  @Input() public username: string;
  // inicializando a variavel
  constructor(){
    this.username = ""
  }
}
