import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SlidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SlidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
