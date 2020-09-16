import { Categoria } from './categoria.model';
import { Dificuldade } from './dificuldade.model';

export class Palavra {
  id: number;
  palavra_col: string;
  dificuldade: Dificuldade;
  categorias: [Categoria];
}
