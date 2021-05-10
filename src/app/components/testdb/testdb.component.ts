import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Song } from 'src/app/interfaces/song';

@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrls: ['./testdb.component.css']
})
export class TestdbComponent implements OnInit {
  cancion: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.cancion = firestore.collection<Song[]>('songs').valueChanges();
  }

  ngOnInit(): void {
  }

}
