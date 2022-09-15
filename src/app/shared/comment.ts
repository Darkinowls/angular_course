export class Comment {
    rating: number
    comment: string
    date: string
    author: string


  constructor(rating: number, comment: string, date: string, author: string) {
    this.rating = rating;
    this.comment = comment;
    this.date = date;
    this.author = author;
  }
}
