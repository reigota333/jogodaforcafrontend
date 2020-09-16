import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Form } from '@angular/forms';
import { Dificuldade } from 'src/app/models/dificuldade.model';
import { Categoria } from 'src/app/models/categoria.model';
import { DificuldadeService } from 'src/app/services/dificuldade.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { PalvraService } from 'src/app/services/palvra.service';
import { GameService } from 'src/app/services/game.service';
import { Palavra } from 'src/app/models/palavra.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.css'],
})
export class GameMenuComponent implements OnInit {
  settingsForm: FormGroup;
  dificuldades: Dificuldade;
  categorias: Categoria;

  constructor(
    private fb: FormBuilder,
    private dificuldadeService: DificuldadeService,
    private categoriaService: CategoriaService,
    private palavraService: PalvraService,
    private gameService: GameService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      dificuldade: 0,
      categoria: 0,
    });

    this.dificuldadeService.getDificuldades().subscribe(
      (data: Dificuldade) => {
        this.dificuldades = data;
      },
      (error) => {
        this.toastr.error(error.error.message, 'Erro');
      }
    );

    this.categoriaService.getCategorias().subscribe(
      (data: Categoria) => {
        this.categorias = data;
      },
      (error) => {
        this.toastr.error(error.error.message, 'Erro');
      }
    );
  }

  async start() {
    this.palavraService
      .getPalavra(
        this.settingsForm.value.dificuldade,
        this.settingsForm.value.categoria
      )
      .subscribe(
        (data: Palavra) => {
          this.gameService.startGame(data);
        },
        (error) => {
          this.toastr.error(error.error.message, 'Erro');
        }
      );
  }
}
