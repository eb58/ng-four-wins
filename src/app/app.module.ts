import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuestionDialogComponent } from './components/question-dialog/question-dialog.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    QuestionDialogComponent,
    SettingsDialogComponent,
  ],
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatCardModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
