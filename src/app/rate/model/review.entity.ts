export class Review {
  id: number;
  title: string;
  rate: number;
  img: string;
  description: string;

  constructor() {
    this.id = 0;
    this.title = "";
    this.rate = 0;
    this.img='';
    this.description = "";
  }
}
