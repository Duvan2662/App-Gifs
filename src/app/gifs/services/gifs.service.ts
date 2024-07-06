import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] =  [];
  private apiKey:       string   = 'KuUgiG6FJdirHdre7Hg8qF0yfw9FJS0y';
  private serviceUrl:   string   = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient){

  }



  public get tagsHistory () : string[]{
    return this._tagsHistory;
  }



  private organizeHistory = (tag: string): void => {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag!== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);

  }


    public searchTags = (tag: string): void => {

    if (tag.length === 0) {
      return
    }

    const parameters = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q',tag)



    this.http.get(`${this.serviceUrl}/search`,{params:parameters})
    .subscribe(respuesta => {
      console.log(respuesta);
    })





    this.organizeHistory(tag);
  }

}
