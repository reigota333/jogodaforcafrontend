import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';
import { HitObject } from '../models/hit-object.model';
import { Palavra } from '../models/palavra.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameRequestsService {
  constructor(private http: HttpClient) {}

  startGame(palavra: Palavra): Observable<number> {
    return this.http.post<number>(GLOBAL.url + '/game', palavra);
  }

  tyWord(palavra: any) {
    return this.http.post<HitObject>(GLOBAL.url + '/game/try', palavra).pipe(
      map((res) => {
        return res;
      })
    );
  }

  tryChar(char: any) {
    return this.http.post<HitObject>(GLOBAL.url + '/game/tryhit', char).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
