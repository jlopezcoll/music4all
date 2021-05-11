import { Injectable} from "@angular/core";
import { Observable} from "rxjs";
import { Song } from "../interfaces/song";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class SongService{

  songs: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.songs = firestore.collection('songs').valueChanges();
   }
  
  getFiles():Observable<Song[]>  {
    return this.songs;
  }
}
