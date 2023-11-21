import { Component ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {


  term:string=''



  // dekh(){
  //   console.log(this.term);
  // }
//child to parent
@Output() emitter=new EventEmitter<string>()

  onformSubmit(event:any){
    event.preventDefault()
    console.log(this.term);
    this.emitter.emit(this.term)

  }

}
