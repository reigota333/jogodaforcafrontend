import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddWordComponent } from './components/add-word/add-word.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GameGuard } from './guards/game.guard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'game', component: GamePageComponent, canActivate: [GameGuard] },
  { path: 'addword', component: AddWordComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
