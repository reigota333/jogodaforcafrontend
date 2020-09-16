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
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css'],
})
export class AddCatComponent implements OnInit, OnChanges {
  @Output() destroyCheckCat: EventEmitter<string> = new EventEmitter<string>();
  @Input('categoria') categoria: Categoria;
  addCatForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.addCatForm = this.fb.group({
      id: [null],
      categoria_col: [null, Validators.required],
    });
    if (this.categoria) {
      this.addCatForm.setValue(this.categoria);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  destroyCheck() {
    this.destroyCheckCat.emit();
  }

  addCat() {
    if (this.addCatForm.value.id == null) {
      this.categoriaService.addCategoria(this.addCatForm.value).subscribe(
        (data: Categoria) => {
          this.toastr
            .success('Categoria Adicionada com Sucesso', 'Sucesso')
            .onHidden.subscribe(() => {
              window.location.reload();
            });
        },
        (error) => {
          this.toastr.error(error.error.message, 'Erro');
        }
      );
    } else {
      this.categoriaService.updateCat(this.addCatForm.value).subscribe(
        (data: Categoria) => {
          this.toastr
            .success('Categoria Alterada com Sucesso', 'Sucesso')
            .onHidden.subscribe(() => {
              window.location.reload();
            });
        },
        (error) => {
          this.toastr.error(error.error.message, 'Erro');
        }
      );
    }
  }
}
