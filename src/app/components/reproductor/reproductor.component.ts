import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../../interfaces/song';
import { StreamState } from '../../interfaces/stream-state';
import { AudioService } from '../../services/audio.service';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  @Input() song: Song;

  state: StreamState;

  constructor(
    public audioService: AudioService) {
    // suscrito al servicio estado del stream 
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }
  
  ngOnInit(): void {
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

}
