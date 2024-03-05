// export class FaceSnap {
//   title: string;
//   description: string;
//   imageURL: string;
//   createdDate: Date;
//   snaps: number;

//   constructor(
//     title: string,
//     description: string,
//     imageURL: string,
//     createdDate: Date,
//     snaps: number
//   ) {
//     this.title = title;
//     this.description = description;
//     this.imageURL = imageURL;
//     this.createdDate = createdDate;
//     this.snaps = snaps;
//   }
// }

export class FaceSnap {
  constructor(
    public title: string,
    public description: string,
    public imageURL: string,
    public createdDate: Date,
    public snaps: number
  ) {}
}
