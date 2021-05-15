import { Component, Input, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from '../../interfaces/song';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

 @Input('songInput') song_;
 
 songs?: Array<any> = [];
 newSong = {} as Song;
 editedSong: Song;
 isEdited: boolean = false;

  constructor(public songService: SongService) {
    this.songService.getFiles().subscribe(songs => {
      console.log(songs);
      
      this.songs = songs;
    });
   }

   addSong() {
     console.log(this.newSong);
     if (
       this.newSong.id !== '' && 
       this.newSong.track !== 0 &&
       this.newSong.title !== '' &&
       this.newSong.composer !== [''] &&
       this.newSong.performer !== [''] &&
       this.newSong.style !== [''] &&
       this.newSong.time !== '' &&
       this.newSong.year !== '' &&
       this.newSong.thumbnails !== '' &&
       this.newSong.url !== ''
       ) {
         this.songService.addFile(this.newSong)
         this.newSong = {} as Song;
        }
      }
      
      editSong(event, s) {
        this.editedSong = s;
        this.isEdited = !this.isEdited;
      }

      updateSong() {
        this.songService.updateFile(this.editedSong);
        this.editedSong = {} as Song;  
        this.isEdited = false;
      }
      
      deleteSong(event, s) {
        this.songService.deleteFile(s)
      }
      
      ngOnInit(): void {
        
      }
    }
    