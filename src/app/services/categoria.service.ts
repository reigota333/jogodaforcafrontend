import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria> {
    return this.http.get<Categoria>(GLOBAL.url + '/categorias');
  }

  addCategoria(categoria: any): Observable<Categoria> {
    return this.http.post<Categoria>(GLOBAL.url + '/categorias', categoria);
  }

  deleteCat(id: number): Observable<any> {
    return this.http.delete<any>(GLOBAL.url + '/categorias/' + id);
  }

  updateCat(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(
      GLOBAL.url + '/categorias/' + categoria.id,
      categoria
    );
  }
}
