import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BothComponent } from './wot/both/both.component';
import { TypingComponent } from './wot/typing/typing.component';
import { PwgComponent } from './wot/pwg/pwg.component';
import { MainpediaComponent } from './wt/mainpedia/mainpedia.component';
import { SearchbarComponent } from './wt/searchbar/searchbar.component';
import { PagelistComponent } from './wt/pagelist/pagelist.component';
import { HttpClientModule} from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BothComponent,
    TypingComponent,
    PwgComponent,
    MainpediaComponent,
    SearchbarComponent,
    PagelistComponent,
    
  
  
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
