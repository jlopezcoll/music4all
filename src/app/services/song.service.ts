import { Injectable, OnInit  } from "@angular/core";
import { Observable, of } from "rxjs";
import { Song } from "../interfaces/song";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class SongService implements OnInit{

  songs: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.songs = firestore.collection('songs').valueChanges();
   }
  
  getFiles():Observable<Song[]>  {
    return this.songs;
  }

  ngOnInit(): void {
  }
}
