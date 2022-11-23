import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import {RouterLink, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerComponent,
    YoutubePlaylistComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
