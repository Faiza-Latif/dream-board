import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = new Observable<any>();
  constructor(af: AngularFireDatabase) {
     this.title = af.object('title').valueChanges();
  }
}
