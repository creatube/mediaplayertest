import { YtProvider } from './../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
 
@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  videos: Observable<any[]>;
 
  constructor(private navParams: NavParams, private ytProvider: YtProvider, private youtube: YoutubeVideoPlayer, private plt: Platform) {
    let listId = this.navParams.get('id');
    this.videos = this.ytProvider.getListVideos(listId);
  }
 
  openVideo(video) {

  	console.log(video.snippet.resourceId.videoId);

    if (this.plt.is('cordova')) {
      this.youtube.openVideo(video.snippet.resourceId.videoId);
      // this.youtube.openVideo("T0w5wYmffhU");
    } else {
      window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    }
  }
}