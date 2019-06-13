import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'board-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = new Observable<any>();
  constructor(af: AngularFireDatabase) {
     this.title = af.object('title').valueChanges();
  }
  ngOnInit() {
  }

}
