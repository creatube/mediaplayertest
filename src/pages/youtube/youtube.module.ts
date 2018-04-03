import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubePage } from './youtube';


import { HttpModule } from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    YoutubePage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubePage),
  ],
})
export class YoutubePageModule {}
