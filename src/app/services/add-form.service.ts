import { Injectable } from '@angular/core';
import { Palavra } from '../models/palavra.model';

@Injectable({
  providedIn: 'root',
})
export class AddFormService {
  private palavra: Palavra;

  constructor() {}

  getPalavra(): Palavra {
    return this.palavra;
  }

  setPalavra(palavra: Palavra): void {
    this.palavra = palavra;
  }
}
