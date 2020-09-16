import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria.model';
import { Dificuldade } from 'src/app/models/dificuldade.model';
import { Palavra } from 'src/app/models/palavra.model';
import { AddFormService } from 'src/app/services/add-form.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { DificuldadeService } from 'src/app/services/dificuldade.service';
import { PalvraService } from 'src/app/services/palvra.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit, OnChanges {
  @Output() destroyCheckPal: EventEmitter<string> = new EventEmitter<string>();
  @Input('palavra') palavra: Palavra;
  addWordForm: FormGroup;
  dificuldades: Dificuldade;
  categorias: Categoria;

  constructor(
    private fb: FormBuilder,
    private addFormService: AddFormService,
    private dificuldadeService: DificuldadeService,
    private categoriaService: CategoriaService,
    private palavraService: PalvraService,
    private toatr: ToastrService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  destroyCheck() {
    this.destroyCheckPal.emit();
  }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (data: Categoria) => {
        this.categorias = data;
      },
      (error) => {
        this.toatr.error(error.error.message, 'Erro');
      }
    );
    this.dificuldadeService.getDificuldades().subscribe(
      (data: Dificuldade) => {
        this.dificuldades = data;
      },
      (error) => {
        this.toatr.error(error.error.message, 'Erro');
      }
    );
    this.addWordForm = this.fb.group({
      id: [null],
      palavra_col: ['', [Validators.required]],
      categorias: [[], Validators.required],
      dificuldade: [{ id: 1, dificuldade_col: 'Fácil' }],
    });
    if (this.palavra) {
      this.addWordForm.setValue({
        id: this.palavra.id,
        palavra_col: this.palavra.palavra_col,
        dificuldade: this.palavra.dificuldade,
        categorias: this.palavra.categorias,
      });
    }
  }

  compareFn = this._compareFn.bind(this);
  compareCat = this._compareCat.bind(this);

  _compareFn(a, b) {
    // Handle compare logic (eg check if unique ids are the same)
    return a.id === b.id;
  }

  _compareCat(a, b) {
    // Handle compare logic (eg check if unique ids are the same)
    if (a && b) return a.id === b.id;
  }

  addWord() {
    if (this.addWordForm.value.id == null) {
      this.palavraService.addPalavra(this.addWordForm.value).subscribe(
        (data: Palavra) => {
          this.toatr
            .success('Palavra Adicionada com Sucesso', 'Sucesso')
            .onHidden.subscribe(() => {
              window.location.reload();
            });
        },
        (error) => {
          this.toatr.error(error.error.message, 'Erro');
        }
      );
    } else {
      this.palavraService.updatePalavra(this.addWordForm.value).subscribe(
        (data: Palavra) => {
          this.toatr
            .success('Palavra Alterada com Sucesso', 'Sucesso')
            .onHidden.subscribe(() => {
              window.location.reload();
            });
        },
        (error) => {
          this.toatr.error(error.error.message, 'Erro');
        }
      );
    }
  }
}
