import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {rxjs/add/operator/map} from '@angular/core';

@Injectable()
export class ProductService {

  private string _albumUrl = "../assets/album.json";

  constructor(private _http: Http) {

  }

  public getAlbum(number id){
     return this.http.get(_albumUrl);
  }

}
