import { Component, OnInit } from '@angular/core';
 import * as firebase from 'firebase';
 import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ng-test-ssr';

  ngOnInit() {

      firebase.initializeApp(environment.firebaseConfig);

  }
}
