import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaylistPage } from './playlist';

import { HttpModule } from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


@NgModule({
  declarations: [
    PlaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaylistPage),
  ],
})
export class PlaylistPageModule {}
