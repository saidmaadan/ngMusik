import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MusicService} from '../services/music.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(private _musicService: MusicService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
    .map(params => params['id'])
    .subscribe((id) => {
      this._musicService.getAlbum(id)
        .subscribe(album => {
          this.album = album;
        })
    });
  }

}
