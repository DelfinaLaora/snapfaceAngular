import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Fée',
      'Elle me suit partout !',
      '../assets/Fée.jpg',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      "Fée de l'automne",
      'Danse au milieu des feuilles',
      '../assets/Fée2.jpg',
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnap(
      'Maison féérique',
      'Un petit coin de paradis',
      '../assets/Fée3.jpg',
      new Date(),
      0
    );
  }
}
