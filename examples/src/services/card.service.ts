import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>("http://localhost:3000/cards")
  }
}
