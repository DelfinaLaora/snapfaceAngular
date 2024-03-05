import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  // title!: string;
  // description!: string;
  // imageURL!: string;
  // createdDate!: Date;
  // snaps!: number;
  buttonText!: string;

  // ngOnInit(): void {}
  ngOnInit() {
    // this.title = 'Archibald';
    // this.description = 'Mon meilleur ami depuis tout petit !';
    // this.imageURL = '../assets/Fée.jpg';
    // this.createdDate = new Date();
    // this.snaps = 6;
    this.buttonText = 'Oh snap !';
  }

  onSnap() {
    if (this.buttonText === 'Oh snap !') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, un snap !';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh snap !';
    }
  }
}
