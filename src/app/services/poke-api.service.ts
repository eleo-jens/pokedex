import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  urlApi : string = "https://pokeapi.co/api/v2";

  constructor(private _httpclient : HttpClient) { }

  // methodes pour lancer nos différentes requêtes HTTP
  getAll(startIndex: string){
    return this._httpclient.get<any>(`${this.urlApi}/pokemon/?offset=${startIndex}&limit=200`)
  }

  getOneByUrl(url: string){
    return this._httpclient.get<any>(url)
  }
}
