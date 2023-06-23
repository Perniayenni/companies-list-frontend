import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Companie } from '../interfaces/companie.interface';
import { Observable } from 'rxjs';

const URL_API = 'localhost:5001'
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  public getStartups = () :Observable<Companie[]> => {
    return this.http.get<Companie[]>(`${URL_API}/startups`);
  }
}
