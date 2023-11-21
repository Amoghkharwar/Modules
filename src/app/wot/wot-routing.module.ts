import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwgComponent } from './pwg/pwg.component';
import { TypingComponent } from './typing/typing.component';
//import { WotModule } from './wot.module';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WotRoutingModule { }
