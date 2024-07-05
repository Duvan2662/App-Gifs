import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template:`
    <h5>Buscar</h5>
    <input type="text" class="form-control" placeholder="Buscar gifs...." (keyup.enter)="searchTag()" #txtTagImput>
  `,
})
export class SearchBoxComponent {

  @ViewChild('txtTagImput')
  public tagInput!: ElementRef <HTMLInputElement>;

  public searchTag = (): void => {
    const newTag = this.tagInput.nativeElement.value;
    
    console.log({newTag});
  }

}
