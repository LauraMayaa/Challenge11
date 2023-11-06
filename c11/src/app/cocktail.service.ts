import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktails } from './cocktails.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) { }

  getCocktails(): Observable<Cocktails[]> {
    return this.http.get<Cocktails[]>("assets/cocktails.json");
  }
}