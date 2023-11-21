import { Component } from '@angular/core';
import { PediaService } from './wt/mainpedia/pedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mods';
  pages:any=[]

  constructor(private ps:PediaService){

  }
  onemit(event:string){
 
    
  }
}
