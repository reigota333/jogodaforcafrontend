import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GameMenuComponent } from './components/game-menu/game-menu.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { WinLostComponent } from './modal/win-lost/win-lost.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { from } from 'rxjs';
import { AddCatComponent } from './components/add-cat/add-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GameMenuComponent,
    GamePageComponent,
    WinLostComponent,
    AddWordComponent,
    AddFormComponent,
    AddCatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true,
      preventDuplicates: true,
      timeOut: 1000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
