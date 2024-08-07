import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];


  private _tagsHistory: string[] =  [];
  private apiKey:       string   = 'OsaJfPyVr7McLkByvmBxCXgkS96VNyVS';
  private serviceUrl:   string   = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient){
    this.loadLocalStorage();

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
    this.saveLocalStorage();

  }



  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }


  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) {
      //si no tenemos data
      return
    }
    const temporal = localStorage.getItem('history');
    this._tagsHistory = JSON.parse(temporal!);
    if (this._tagsHistory.length ===0) {
      return
    }
    this.searchTags(this._tagsHistory[0]);
  }



  public searchTags = (tag: string): void => {

    if (tag.length === 0) {
      return
    }

    const parameters = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q',tag);



    this.http.get <SearchResponse>(`${this.serviceUrl}/search`,{params:parameters})
    .subscribe((respuesta) => {
      this.gifList = respuesta.data;

    })



    this.organizeHistory(tag);
  }

}
