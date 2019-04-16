import { Observable, of } from 'rxjs';
import { Book, UsersQueueItem } from '../models/Book';
import { map } from 'rxjs/operators';
import { ResponseItem } from '../models/Item';
import { Comment, CommentDTO } from '../models/Comment';
import { User, UserDTO } from '../models/User';
import {
  BOOK_ANG_INFO,
  BOOK_ENDING,
  BOOK_ME_IN_QUEUE,
  BOOK_MY_ENDING,
  BOOK_MY_OVERDUE,
  BOOK_OVERDUE,
  BOOK_POPULAR,
  BOOK_PROG_INFO,
  BOOK_SOV_INFO,
  BOOK_TAKEN,
  BOOK_TAKEN_BY_ME,
  USER_VITALY
} from './books.mock';
import { BookRequest } from '../typing/book.request';

export interface BookDTO {
  id: string;
  details: BookDetails;
  createdDate: string;
  comments?: CommentDTO[];
  status: string;
  statusDetails?: StatusDetailsDTO;
}

export interface BookDetails {
  title: string;
  image: string;
  author: string;
  description: string;
  labels?: ResponseItem[];
  publishedDate: string;
  pages?: number;
  isbn?: string;
}

export interface Vote {
  userId: string;
  nickName: string;
  position: boolean;
}

export interface StatusDetailsDTO {
  votes?: Vote[];
  usersQueue?: UsersQueueItem[];
  takenBy?: UserDTO;
  takenFrom?: string;
  takenTo?: string;
}

export class BooksService {

  public getUpdatesList(): Observable<Book[]> {
    return of([
      {
        ...BOOK_PROG_INFO,
        status: 'voting',
        statusDetails: {
          votes: [
            {
              userId: 'lok987654',
              nickName: 'Dima',
              position: false
            },
            {
              userId: 'eswf',
              nickName: 'Nika',
              position: false
            },
            {
              userId: 'fgv',
              nickName: 'Lera',
              position: true
            },
            {
              userId: '987sfgbh654',
              nickName: 'Nik',
              position: false
            },
            {
              userId: 'fgbh',
              nickName: 'Vitaly',
              position: true
            },
            {
              userId: 'ghn',
              nickName: 'Ilya',
              position: false
            },
            {
              userId: '98gm7654',
              nickName: 'Marina',
              position: false
            },
            {
              userId: 'qwe',
              nickName: 'Alex',
              position: true
            },
          ]
        }
      },
      {
        ...BOOK_SOV_INFO,
        status: 'voting',
        statusDetails: {
          votes: [
            {
              userId: '987654',
              nickName: 'Irina',
              position: false
            }
          ]
        }
      }
    ]).pipe(
      map(list => this.bookListDtoToModel(list))
    );
  }

  public getTakenByMe(): Observable<Book[]> {
    return of([
      BOOK_MY_ENDING,
      BOOK_MY_OVERDUE,
      BOOK_TAKEN_BY_ME
    ]).pipe(
      map(list => this.bookListDtoToModel(list))
    );
  }

  public getBooksList(): Observable<Book[]> {
    return of([
      BOOK_TAKEN_BY_ME,
      BOOK_ENDING,
      BOOK_TAKEN,
      BOOK_MY_OVERDUE,
      BOOK_OVERDUE,
      {
        ...BOOK_ANG_INFO,
        id: '9',
        status: 'available'
      },
      {
        ...BOOK_PROG_INFO,
        id: '10',
        status: 'available'
      },
      BOOK_POPULAR,
      BOOK_ME_IN_QUEUE
    ]).pipe(
      map(list => this.bookListDtoToModel(list))
    );
  }

  public getMyWishlist(): Observable<Book[]> {
    return of([]).pipe(
      map(list => this.bookListDtoToModel(list))
    );
  }

  public getBook(id: string): Observable<Book> {
    return of({
      id: '1',
      createdDate: '2019-03-20T08:43:41.043Z',
      details: {
        title: 'Совершенный код. Мастер-класс',
        image: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7' +
          '/3/2/324757_25692061.jpg',
        author: 'Стив МакКоннелл',
        description: 'Более 10 лет первое издание этой книги считалось одним из лучших практических руководств по программированию. ' +
          'Сейчас эта книга полностью обновлена с учетом современных тенденций и технологий и дополнена сотнями новых примеров, ' +
          'иллюстрирующих искусство и науку программирования. Опираясь на академические исследования, с одной стороны, и практический ' +
          'опыт коммерческих разработок ПО с другой, автор синтезировал из самых эффективных методик и наиболее эффективных принципов ' +
          'ясное прагматичное руководство. Каков бы ни был ваш профессиональный уровень, с какими бы средствами разработками вы ни ' +
          'работали, какова бы ни была сложность вашего проекта, в этой книге вы найдете нужную информацию, она заставит вас ' +
          'размышлять, поможет создать совершенный код.\n\n' +
          'Книга состоит из 35 глав, предметного указателя и библиографии.',
        publishedDate: '2017',
        pages: 896,
        isbn: '978-5-9909805-1-8',
        labels: [
          { id: '1', name: 'JS' },
          { id: '3', name: 'TS' },
        ],
      },
      comments: [
        {
          id: '12',
          user: {
            id: 'currentUserId',
            email: 'irina@mail.com',
            nickName: 'Irina',
            role: 'user'
          },
          text: 'Отличная книга. Со временем приходишь к тому же, но лучшебы в университете был такой курс лекций ещё на первом-втором ' +
            'курсе. Чтобы действительно студенты учились програмировать, а не просто изучали языки.\n' +
            '\n' +
            'Довольно грамотное и подробное содержание, которое в других книгах проскальзывает в скользь. Просто совет всем изучить ' +
            'данную книгу.',
          type: 'like',
          date: '2019-02-20T08:43:41.043Z'
        },
        {
          id: '12',
          user: {
            id: '123',
            email: 'irina@mail.com',
            nickName: 'Ilya',
            role: 'user'
          },
          text: 'Книга - так себе. Может быть это находка для начинающих, но все что в ней написано лично мне из опыта давно было ' +
            'известно, как впрочем и любому программисту с опытом коммерческой разработки. Много философии. Приятной впрочем. Написана ' +
            'книга в одном стиле, довольно качественно. Но имхо - лучше купить пару книжек по конкретным технологиям которые ' +
            'интересуют Вас, как специалиста, и изучить их. Пользы будет больше',
          type: 'dislike',
          date: '2019-02-20T08:43:41.043Z'
        }
      ],
      status: 'taken',
      statusDetails: {
        takenBy: {
          id: '46456',
          email: 'irina@mail.com',
          nickName: 'Irina',
          role: 'user'
        },
        takenFrom: '2019-03-20T08:43:41.043Z',
        takenTo: '2019-04-24T08:43:41.043Z',
        usersQueue: [
          {
            user: {
              id: '123',
              email: 'irina@mail.com',
              nickName: 'Lena',
              role: 'user'
            },
            forWeeks: 6
          }
        ]
      }
    }).pipe(
      map(bookDto => new Book(
        bookDto.id,
        bookDto.details,
        bookDto.status,
        bookDto.createdDate,
        this.commentsDtoToModel(bookDto.comments),
        bookDto.statusDetails,
      ))
    );
  }

  public getBookRequests(): Observable<BookRequest[]> {
    return of([
      {
        id: '1',
        description: 'Отличная книга',
        creationDate: '2019-03-20T08:43:41.043Z',
        user: USER_VITALY,
        url: 'https://oz.by/books/more1015206.html'
      }
    ]);
  }

  public vote(bookId: string, position: boolean): void {
    console.log(`vote for book ${bookId}: ${position}`);
  }

  public addToWishlist(bookId: string): void {
    console.log(`Add to whishlist: ${bookId}`);
  }

  public removeFromWishlist(bookId: string): void {
    console.log(`Remove from whishlist: ${bookId}`);
  }

  public takeBook(bookId: string, timeTo: string) {
    console.log(`Take book: ${bookId} till ${timeTo}`);
  }

  private bookListDtoToModel(booksDTOs: BookDTO[]): Book[] {
    return booksDTOs.map(bookDto => {
      return new Book(
        bookDto.id,
        bookDto.details,
        bookDto.status,
        bookDto.createdDate,
        this.commentsDtoToModel(bookDto.comments),
        bookDto.statusDetails,
      );
    });
  }

  private commentsDtoToModel(commentsDTO: CommentDTO[]): Comment[] {
    return commentsDTO.map(({ id, user, text, type, date }) => new Comment(id, this.userDtoToModel(user), text, type, date));
  }

  private userDtoToModel(user: UserDTO): User {
    if (user) {
      const { id, email, nickName, avatar, role } = user;
      return new User(id, email, nickName, avatar, role);
    }

    return null;
  }
}
