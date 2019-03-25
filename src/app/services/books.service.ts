import { Observable, of } from 'rxjs';
import { Book } from '../models/Book';
import { map } from 'rxjs/operators';
import { Label, ResponseItem } from '../models/Item';
import { Comment, CommentDTO, ResponseComment } from '../models/Comment';
import { User } from '../models/User';

export interface BookDTO {
  id: string;
  title: string;
  image: string;
  author: string[];
  description: string;
  publishedDate: string;
  createdDate: string;
  comments?: CommentDTO[];
  labels?: ResponseItem[];
  status: string;
  votesAgainst?: number;
  votesFor?: number;
}

export class BooksService {

  public getUpdatesList(): Observable<Book[]> {
    return of([
      {
        id: '1',
        title: '1BLA',
        image: 'http://www.angelique-world.ru/cover13.gif',
        author: [
          'HENA',
          'Author'
        ],
        description: 'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее из сброшюрованных или отдельных',
        publishedDate: '2019-03-20T08:43:41.043Z',
        createdDate: '2019-03-20T08:43:41.043Z',
        comments: [],
        labels: [
          { id: '1', name: 'JS' },
          { id: '3', name: 'TS' },
        ],
        status: 'Voting',
        votesAgainst: 2,
        votesFor: 5
      }
    ]).pipe(
      map(list => this.bookDtoToModel(list))
    );
  }

  public getBooksList(): Observable<Book[]> {
    return of([
      {
        id: '1',
        title: 'Совершенный код. Мастер-класс',
        image: 'https://s4-goods.ozstatic.by/2000/206/15/1/1015206_0.jpg',
        author: [
          'Стив МакКоннелл'
        ],
        description: 'Более 10 лет первое издание этой книги считалось одним из лучших практических руководств по программированию. ' +
          'Сейчас эта книга полностью обновлена с учетом современных тенденций и технологий и дополнена сотнями новых примеров, ' +
          'иллюстрирующих искусство и науку программирования. Опираясь на академические исследования, с одной стороны, и практический ' +
          'опыт коммерческих разработок ПО - с другой, автор синтезировал из самых эффективных методик и наиболее эффективных принципов ' +
          'ясное прагматичное руководство. Каков бы ни был ваш профессиональный уровень, с какими бы средствами разработками вы ни ' +
          'работали, какова бы ни была сложность вашего проекта, в этой книге вы найдете нужную информацию, она заставит вас размышлять и' +
          ' поможет создать совершенный код.\n\n' +
          'Книга состоит из 35 глав, предметного указателя и библиографии.',
        publishedDate: '2017-01-01T00:00:00.043Z',
        createdDate: '2019-03-20T08:43:41.043Z',
        comments: [
          {
            id: '12',
            user: {
              id: '123',
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
              nickName: 'Irina',
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
        labels: [
          { id: '1', name: 'JS' },
          { id: '3', name: 'TS' },
        ],
        status: 'available',
        votesAgainst: 2,
        votesFor: 5
      }
    ]).pipe(
      map(list => this.bookDtoToModel(list))
    );
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

  public takeBook(bookId: string, timeInWeeks: number) {
    console.log(`Take book: ${bookId} for ${timeInWeeks} week(s)`);
  }

  private bookDtoToModel(booksDTOS: BookDTO[]): Book[] {
    return booksDTOS.map(dto => new Book(
      dto.id,
      dto.title,
      dto.image,
      dto.author,
      dto.description,
      dto.labels,
      dto.status,
      dto.publishedDate,
      dto.createdDate,
      this.commentsDtoToModel(dto.comments),
      dto.votesAgainst,
      dto.votesFor
    ));
  }

  private commentsDtoToModel(commentsDTO: CommentDTO[]): Comment[] {
    return commentsDTO.map(comment => new Comment(
      comment.id,
      new User(
        comment.user.id,
        comment.user.email,
        comment.user.nickName,
        comment.user.avatar,
        comment.user.role,
      ),
      comment.text,
      comment.type,
      comment.date
    ));
  }
}
