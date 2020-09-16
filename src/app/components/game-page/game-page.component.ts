import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Dificuldade } from 'src/app/models/dificuldade.model';
import { Palavra } from 'src/app/models/palavra.model';
import { GameService } from 'src/app/services/game.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HitObject } from 'src/app/models/hit-object.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css'],
})
export class GamePageComponent implements OnInit {
  titulo_win = 'Parabéns!!';
  titulo_lost = 'Mais Sorte Para a Próxima Vez';
  palavraVal: any;
  private palavraLen: Map<number, any>;
  dificuldade: Dificuldade;
  categorias: Categoria[];
  tryWord: FormGroup;
  tryHit: FormGroup;
  hitObject: HitObject;

  constructor(
    private gameService: GameService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.tryWord = this.fb.group({
      palavra: ['', [Validators.required]],
    });
    this.tryHit = this.fb.group({
      car: ['', [Validators.required, Validators.maxLength(1)]],
    });
    this.populate();
  }

  populate() {
    let length = this.gameService.getLength();
    this.palavraLen = new Map(Array(length).fill('_').entries());
    this.palavraVal = Array.from(this.palavraLen.values());
    this.dificuldade = this.gameService.getPalavra().dificuldade;
    this.categorias = this.gameService.getPalavra().categorias;
  }

  async submitWord() {
    (await this.gameService.tryWord(this.tryWord.value)).subscribe(
      (data) => {
        this.hitObject = data;
      },
      (error) => {
        this.toastr.error(error.error.message, 'Erro');
      }
    );
  }

  async submitHit() {
    (await this.gameService.tryChar(this.tryHit.value)).subscribe(
      (data) => {
        this.hitObject = data;
        if (data.hit) this.repopulate();
      },
      (error) => {
        this.toastr.error(error.error.message, 'Erro');
      }
    );
  }

  repopulate() {
    this.hitObject.index.forEach((element) => {
      this.palavraLen.set(element, this.tryHit.value.car.toLowerCase());
    });
    this.palavraVal = Array.from(this.palavraLen.values());
  }
}
