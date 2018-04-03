import { YtProvider } from './../../providers/yt/yt';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the YoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
})
export class YoutubePage {

	channelId = "UCoKS4l1vVJnzUZI5-N0LmeA";
	playlists: Observable<any[]>;

  constructor(public navCtrl: NavController, private ytProvider:YtProvider, public navParams: NavParams, private alertCtrl: AlertController) {}

  searchPlaylists() {
  	this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
  	this.playlists.subscribe( data => {
  		console.log('playlist', data);
  	}, err=> {
  		let alert = this.alertCtrl.create({
  			title:'Error',
  			message:'No playlist found for that channel ID',
  			buttons:['OK']
  		});
  		alert.present();
  	})
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad YoutubePage');
  }

  openPlaylist(id) {
  	console.log('id : ', id);
  	this.navCtrl.push('PlaylistPage', {id: id});

  }

}
