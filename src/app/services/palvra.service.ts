import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Palavra } from '../models/palavra.model';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root',
})
export class PalvraService {
  constructor(private http: HttpClient) {}

  getPalavra(dif: number, cat: number): Observable<Palavra> {
    return this.http.get<Palavra>(GLOBAL.url + '/palavras/' + dif + '/' + cat);
  }

  getAllPalavras(): Observable<Palavra> {
    return this.http.get<Palavra>(GLOBAL.url + '/palavras');
  }

  deletePalavra(id: number): Observable<any> {
    return this.http.delete<any>(GLOBAL.url + '/palavras/' + id);
  }

  updatePalavra(palavra: Palavra): Observable<Palavra> {
    return this.http.put<Palavra>(
      GLOBAL.url + '/palavras/' + palavra.id,
      palavra
    );
  }

  addPalavra(palavra: Palavra): Observable<Palavra> {
    return this.http.post<Palavra>(
      GLOBAL.url + '/palavras/dificuldade/' + palavra.dificuldade.id,
      palavra
    );
  }
}
