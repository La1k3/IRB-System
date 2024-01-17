import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wyprowiantowanie } from "./wyprowiantowanie.model";


@Injectable({
  providedIn: 'root'
})

export class WyprowiantowanieService {
  private apiUrl = 'http://localhost:5026/api/Wyprowiantowanie';

  constructor(private http: HttpClient) {}

  getWyprowiantowanie(): Observable<Wyprowiantowanie[]> {
    return this.http.get<Wyprowiantowanie[]>(this.apiUrl);
  }

  createWyprowiantowanie(wyprowiantowanie: Wyprowiantowanie): Observable<Wyprowiantowanie> {
    return this.http.put<Wyprowiantowanie>(this.apiUrl, wyprowiantowanie);
  }

  deleteWyprowiantowanie(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/' + id);
  }
}
