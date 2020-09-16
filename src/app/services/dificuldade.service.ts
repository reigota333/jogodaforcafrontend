import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dificuldade } from '../models/dificuldade.model';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root',
})
export class DificuldadeService {
  constructor(private http: HttpClient) {}

  getDificuldades(): Observable<Dificuldade> {
    return this.http.get<Dificuldade>(GLOBAL.url + '/dificuldades');
  }
}
