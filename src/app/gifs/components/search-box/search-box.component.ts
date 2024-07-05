import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

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


  constructor (private gifService: GifsService) {

  }


  public searchTag = (): void => {
    const newTag = this.tagInput.nativeElement.value;

    this.gifService.searchTags(newTag);
    this.tagInput.nativeElement.value = '';

  }

}
