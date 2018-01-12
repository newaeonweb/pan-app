import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './games/game-detail.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'games/detail', component: GameDetailComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
