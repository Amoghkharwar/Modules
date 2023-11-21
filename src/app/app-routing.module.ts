import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypingComponent } from './wot/typing/typing.component';
import { PwgComponent } from './wot/pwg/pwg.component';
import { BothComponent } from './wot/both/both.component';
import { MainpediaComponent } from './wt/mainpedia/mainpedia.component';
import { SearchbarComponent } from './wt/searchbar/searchbar.component';
import { PagelistComponent } from './wt/pagelist/pagelist.component';







const routes: Routes = [


{path:'pwg',component:PwgComponent},
{path:'typing',component:TypingComponent},
{path:'both',component:BothComponent},
{path:'mainpedia',component:MainpediaComponent},
{path:'searchbar',component:SearchbarComponent},
{path:'pagelist',component:PagelistComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
