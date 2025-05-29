import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DndService {
  private baseUrl = 'https://www.dnd5eapi.co/api';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/classes`);
  }

  getRaces(): Observable<any> {
    return this.http.get(`${this.baseUrl}/races`);
  }

  getFeats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/feats`);
  }

  getSpells(): Observable<any> {
    return this.http.get(`${this.baseUrl}/spells`);
  }

  getItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/items`);
  }


}
