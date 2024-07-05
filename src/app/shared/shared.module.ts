import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidebarComponent } from './components/slidebar/slidebar.component';



@NgModule({
  declarations: [
    SlidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SlidebarComponent
  ]
})
export class SharedModule { }
