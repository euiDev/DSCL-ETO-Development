interface ArticleInterface {
  id: string;
  userId: string;
  title: string;
  body: string;
  date: Date;
}

class Article implements ArticleInterface {
  constructor(
    public id: string,
    public userId: string,
    public title: string,
    public body: string,
    public date: Date
  ) {}
}

export { ArticleInterface, Article };
