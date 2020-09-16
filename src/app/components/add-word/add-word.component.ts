import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Categoria } from 'src/app/models/categoria.model';
import { Palavra } from 'src/app/models/palavra.model';
import { AddFormService } from 'src/app/services/add-form.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { PalvraService } from 'src/app/services/palvra.service';
import { AddFormComponent } from '../add-form/add-form.component';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css'],
})
export class AddWordComponent implements OnInit {
  private readonly onDestroy: Subject<any> = new Subject<any>();
  palavras;
  categorias;
  palavraUp: boolean = false;
  catUp = false;
  palavraUpdate: Palavra;
  catUpdate: Categoria;
  palavraCreate: boolean = false;
  catCreate: boolean = false;
  @ViewChild(AddFormComponent, { static: false }) childComp;

  constructor(
    private palavraService: PalvraService,
    private addFormService: AddFormService,
    private toatr: ToastrService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.palavraService.getAllPalavras().subscribe(
      (data: Palavra) => {
        this.palavras = data;
      },
      (error) => {
        this.toatr.error(error.error.message, 'Erro');
      }
    );
    this.categoriaService.getCategorias().subscribe(
      (data: Categoria) => {
        this.categorias = data;
      },
      (error) => {
        this.toatr.error(error.error.message, 'Erro');
      }
    );
  }

  deleteCat(id: number): void {
    this.categoriaService.deleteCat(id).subscribe(
      (data) => {
        this.toatr
          .success('Categoria Apagada com Sucesso', 'Sucesso')
          .onHidden.subscribe(() => {
            window.location.reload();
          });
      },
      (error) => {
        this.toatr.error(error.error.message, 'Erro');
      }
    );
  }

  delete(id: number): void {
    this.palavraService.deletePalavra(id).subscribe(
      (data) => {
        this.toatr
          .success('Palavra Apagada com Sucesso', 'Sucesso')
          .onHidden.subscribe(() => {
            window.location.reload();
          });
      },
      (error) => {
        this.toatr.error(error.error.message, 'Erro');
      }
    );
  }

  updatePalavra(palavra: Palavra) {
    this.catCreate = false;
    this.palavraUpdate = palavra;
    this.palavraCreate = false;
    this.catUp = false;
    this.palavraUp = true;
  }

  updateCat(categoria: Categoria) {
    this.catUpdate = categoria;
    this.catCreate = false;
    this.palavraCreate = false;
    this.palavraUp = false;
    this.catUp = true;
  }

  palavraCre() {
    this.catCreate = false;
    this.palavraCreate = true;
    this.palavraUp = false;
    this.catUp = false;
  }

  catCre() {
    this.palavraUp = false;
    this.palavraCreate = false;
    this.catCreate = true;
    this.catUp = false;
  }
  
  closeCat() {
    this.catCreate = false;
    this.catUp = false;
  }
  
  closePal(){
    this.palavraUp = false;
    this.palavraCreate = false;
  }
}
