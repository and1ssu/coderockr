export interface Iarticles {
  author: string;
  title: string;
  article: string;
  imageUrl: string;
  authorEmail: string;
  id: string;
  date: string;
}

export interface IContext {
  getArticle(currentPage: number): Promise<void>;
  articles: Iarticles[];
}

export interface IDataProvider {
  children: JSX.Element;
}
