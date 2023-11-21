import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {
  myText='There are many to succssed in life only focus'
  enteredText:string=''


  onInput(value:string){
    this.enteredText=value
    console.log(this.enteredText);
    
  }
  compare(t1:string,et:string){
    if(!et) return "pending"
    
    return et===t1 ? "correct":"incorrect";

  }

}
