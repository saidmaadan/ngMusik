import { Component, OnInit } from '@angular/core';
import { MusicService} from '../services/music.service';
import { Artist } from '../../Artist';


@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {
  findStr:string;
  findResult: Artist[];

  constructor(private _musicService: MusicService) { }

  findSong(){
    this._musicService.findSong(this.findStr).subscribe(res => {
      this.findResult = res.artists.items;
    })
  }

  ngOnInit() {
  }

}
