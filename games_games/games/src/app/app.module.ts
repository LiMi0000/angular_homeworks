import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ColorHoverDirective } from './directives/color-hover.directive';

@NgModule({
  declarations: [AppComponent, GameComponent, ShortenPipe, ColorHoverDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
