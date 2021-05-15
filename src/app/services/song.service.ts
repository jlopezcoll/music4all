import { Injectable} from "@angular/core";
import { Observable} from "rxjs";
import { Song } from "../interfaces/song";
import { 
  AngularFirestore, 
  AngularFirestoreCollection, 
  AngularFirestoreDocument 
} from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SongService{

  songsCollection: AngularFirestoreCollection<Song>;
  songs: Observable<any[]>;
  songDoc: AngularFirestoreDocument<Song>;

  constructor(public firestore: AngularFirestore) {
    // this.songs = firestore.collection('songs').valueChanges();
    this.songsCollection = this.firestore.collection('songs');
    this.songs = this.songsCollection.snapshotChanges()
                          .pipe(map( actions => {
                              return actions.map( a => {
                                const data = a.payload.doc.data() as Song;
                                data.id = a.payload.doc.id;
                                return data;
                              });
                          }));
   }
  
  getFiles():Observable<Song[]>  {
    return this.songs;
  }

  addFile(song: Song){
    this.songsCollection.add(song);
  }

  updateFile(song: Song) {
    this.songDoc = this.firestore.doc(`songs/${song.id}`);
    this.songDoc.update(song);
  }

  deleteFile(song: Song) {
    this.songDoc = this.firestore.doc(`songs/${song.id}`);
    this.songDoc.delete();
  }
}
