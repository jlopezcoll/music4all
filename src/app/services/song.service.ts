import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Song } from "../interfaces/song";

@Injectable({
  providedIn: "root"
})
export class SongService {
  files: Song[] = [
    {
  track: 1,
  title: "Yesterday",
  composer: ["John Lennon", "Paul McCartney"],
  performer: ["The Beatles"],
  style: ["British Invasion", "Contemporary Pop/Rock", "Rock & Roll", "AM Pop", "Folk-Rock", "Psychedelic/Garage", "Soundtracks"],
  time: "00:30",
  year: "1965",
  thumbnails: "https://www.theaudiodb.com/images/media/artist/thumb/qpvwuv1347996168.jpg/preview",
  url: "https://rovimusic.rovicorp.com/playback.mp3?c=A6-awu7If5Ke3sa-Tv5UiphUoDg0hsvx4F4sL4oO-nA=&f=I",
},
  {
  track: 2,
  title: "Blinding Lights",
  composer: ["Ahmad Balshe", "Oscar Holter", "Max Martin", "Jason Quenneville", "Abel Tesfaye"],
  performer: ["The Weeknd"],
  style: ["Alternative R&B", "Contemporary R&B", "Pop"],
  time: "00:30",
  year: "2020",
  thumbnails: "https://www.theaudiodb.com/images/media/artist/thumb/vtxqyp1495060298.jpg/preview",
  url: "https://rovimusic.rovicorp.com/playback.mp3?c=MCil5Q-ejHJKckl3PoG9Zh_TZlp6n_cq-Emr2zx15tU=&f=I",
},
  {
  track: 3,
  title: "You Only Live Twice - Main Title",
  composer: ["John Barry", "Leslie Bricusse"],
  performer: ["Nancy Sinatra"],
  style: ["Stage & Screen"],
  time: "00:30",
  year: "1967",
  thumbnails: "https://www.theaudiodb.com/images/media/artist/thumb/tswpxx1359208506.jpg/preview",
  url: "https://rovimusic.rovicorp.com/playback.mp3?c=NSYsLAJgFxNHNw3evDYkyg4Q1ghY8VaPylnm7PwcKNY=&f=I",
},
  {
  track: 4,
  title: "The Girl from Ipanema",
  composer: ["Norman Gimbel", "Antônio Carlos Jobim", "Vinícius de Moraes"],
  performer: ["Stan Getz", "João Gilberto feat: Antônio Carlos Jobim"],
  style: ["Bossa Nova", "Brazilian Traditions", "Brazilian Jazz", "Global Jazz", "Mainstream Jazz"],
  time: "00:30",
  year: "1964",
  thumbnails: "https://www.theaudiodb.com/images/media/artist/thumb/vpxxuy1403797507.jpg/preview",
  url: "https://rovimusic.rovicorp.com/playback.mp3?c=LxylQnKUNwE9EohlerZ-MRyhM-OFI8zG4l-qVpXXB1I=&f=I",
},
  {
  track: 5,
  title: "Entre Dos Aguas",
  composer: ["Paco de Lucía", "José Torregrosa"],
  performer: ["Paco de Lucía"],
  style: ["Flamenco", "Western European Traditions", "Global Jazz", "Contemporary Flamenco", "Guitar Jazz", "Jazz Instrument"],
  time: "00:30",
  year: "1986",
  thumbnails: "https://www.theaudiodb.com/images/media/artist/thumb/luca-paco-de-5062a474ed9ca.jpg/preview",
  url: "https://rovimusic.rovicorp.com/playback.mp3?c=iDxLxDhuAVMNCR1gbq9cHgSijaXJlYnq0St31qpAJWo=&f=I",
},
  {
  track: 6,
  title: "Surf Rider",
  composer: ["Dick Dale"],
  performer: ["The Lively Ones"],
  style: ["", "Instrumental Rock", "Rock & Roll", "Surf"],
  time: "00:30",
  year: "1963",
  thumbnails: "https://www.theaudiodb.com/images/media/artist/thumb/lively-ones-the-515b4afb9a74f.jpg/preview",
  url: "https://rovimusic.rovicorp.com/playback.mp3?c=SoX0yI-sISvcbv8Al3igigSijaXJlYnq0St31qpAJWo=&f=I",
},
  {
  track: 7,
  title: "Tamacun",
  composer: ["Tamacun"],
  performer: ["Rodrigo y Gabriela"],
  style: ["Alternative/Indie Rock"],
  time: "00:30",
  year: "2006",
  thumbnails: "https://www.theaudiodb.com/images/media/artist/thumb/rqvrvr1340524833.jpg/preview",
  url: "https://rovimusic.rovicorp.com/playback.mp3?c=RSmbGGjy4U8CY73aXZMh0ipQg_7iAU1wjqLgK_xGXts=&f=I",
},
  {
  track: 8,
  title: "Sultans of Swing",
  composer: ["Mark Knopfler"],
  performer: ["Dire Straits"],
  style: ["Album Rock", "Contemporary Pop/Rock", "Rock & Roll"],
  time: "00:30",
  year: "1978",
  thumbnails: "https://www.theaudiodb.com/images/media/artist/thumb/qsrpru1479331864.jpg/preview",
  url: "https://rovimusic.rovicorp.com/playback.mp3?c=NVOUlj_OpEYPmJ7_M1V7C9_M69_UI9rrJSVvWL2-yAg=&f=I",
},
  {
  track: 9,
  title: "Out Of Space",
  composer: ["Liam Howlett", "Kool Keith", "C. Miller", "M. Smith"],
  performer: ["The Prodigy"],
  style: ["Club/Dance", "Hardcore Techno", "Techno", "Rave"],
  time: "00:30",
  year: "1992",
  thumbnails: "https://www.theaudiodb.com/images/media/artist/thumb/qxvtxy1573380365.jpg/preview",
  url: "https://rovimusic.rovicorp.com/playback.mp3?c=ygV7CnCYav1SZqRuJzEOZSpQg_7iAU1wjqLgK_xGXts=&f=I",
}
  ];

  getFiles() {
    return of(this.files);
  }
}
