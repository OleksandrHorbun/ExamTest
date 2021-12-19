import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Iarticle } from '../interfaces/Iarticle'

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

    url:string = "http://localhost:3000/data"

  constructor(private http:HttpClient) { }

  getArticle():Observable<Iarticle[]>{
    return this.http.get<Iarticle[]>(this.url);
  }

  public ID$:number = 0;

  public count$ = new Subject<number>();

  public changeCount(count: number) {
  	this.ID$ = count; 
    this.count$.next(count);
  }

}
