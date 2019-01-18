const DEFAULT_BOOKS_COUNT = 1;
const DEFAULT_COMMENTS_COUNT = 0;

export class Book {
  constructor(
    public readonly id: string = null,
    public title: string = null,
    public image: string = null,
    public author: string = null,
    public description: string = null,
    public count: number = DEFAULT_BOOKS_COUNT,
    public availableCount: number = DEFAULT_BOOKS_COUNT,
    public labelIds: string[] = [],
    public commentsCount: number = DEFAULT_COMMENTS_COUNT
  ) {
    this.availableCount = this.availableCount > this.count ? this.count : this.availableCount;
  }
}

export interface ResponseBook {
  id: string;
  title: string;
  image: string;
  author: string;
  description: string;
  count: number;
  availableCount: number;
  labelIds: string[];
  commentsCount: number;
}
