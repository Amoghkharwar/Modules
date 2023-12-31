import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PediaService {

  constructor(private http:HttpClient) { }



  getData(term:string){
    return this.http.get(
      'https://en.wikipedia.org/w/api.php',
      {
        params: {
    
          action: 'query',
        
          format: 'json',
        
          list: 'search',
        
          utf8: '1',
        
          srsearch: term, 
        
          origin: '*'
        
          }






      }
    );
  }
}
