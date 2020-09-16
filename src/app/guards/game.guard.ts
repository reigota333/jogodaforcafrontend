import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from '../services/game.service';

@Injectable({
  providedIn: 'root',
})
export class GameGuard implements CanActivate {
  constructor(private gameService: GameService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkhasPalavra();
  }

  checkhasPalavra(): boolean {
    if (this.gameService.hasPalavra) {
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }
}
