export class History{
  history: string;
  publication_date: Date;

  constructor(history: string) {
      this.history = history;
      this.publication_date = new Date();
  }
}
