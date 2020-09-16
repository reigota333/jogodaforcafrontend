import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { __await } from 'tslib';
import { HitObject } from '../models/hit-object.model';
import { Palavra } from '../models/palavra.model';
import { GameRequestsService } from './game-requests.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private palavra: Palavra;
  private length: number = 0;
  private hitObject: HitObject;

  constructor(
    private http: HttpClient,
    private gameReqService: GameRequestsService,
    private router: Router
  ) {}

  get hasPalavra(): boolean {
    return !!this.palavra;
  }

  public getPalavra() {
    return this.palavra;
  }

  public getHitObject() {
    return this.hitObject;
  }

  public getLength() {
    return this.length;
  }

  async startGame(palavra: Palavra) {
    this.palavra = palavra;
    await this.gameReqService
      .startGame(this.palavra)
      .subscribe((data: number) => {
        this.length = data;
        this.changeView();
      });
  }

  changeView() {
    this.router.navigate(['/game']);
  }

  async tryWord(palavra: any) {
    let teste = await this.gameReqService.tyWord(palavra);
    return teste;
  }

  async tryChar(char: any) {
    let teste = await this.gameReqService.tryChar(char);
    return teste;
  }

  win() {
    console.log('You Win');
  }

  loose() {
    console.log('You Loose');
  }

  restart() {
    console.log('Restart');
  }
}
