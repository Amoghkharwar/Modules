import { Component} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.css']
})
export class PagelistComponent {

 @Input()
 pageAria:any=[]
}
