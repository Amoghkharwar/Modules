import { Component } from '@angular/core';
import { PediaService } from './pedia.service';

@Component({
  selector: 'app-mainpedia',
  templateUrl: './mainpedia.component.html',
  styleUrls: ['./mainpedia.component.css']
})
export class MainpediaComponent {

  pages:any=[];

  constructor(private ps:PediaService){}

  onemit(event:string){
    console.log(event);
    
    this.ps.getData(event).subscribe((res:any)=>{ //if we have more component pages to add 
      this.pages=res.query.search;
      console.log(this.pages);
      
    }
    );
  }

}
