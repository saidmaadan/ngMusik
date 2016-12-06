import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MusicService} from '../services/music.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private _musicService: MusicService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
    .map(params => params['id'])
    .subscribe((id) => {
      this._musicService.getArtist(id)
        .subscribe(artist => {
          this.artist = artist;
        })

      this._musicService.getAlbums(id)
        .subscribe(albums => {
          this.albums = albums.items;
        })
    });
  }

}
