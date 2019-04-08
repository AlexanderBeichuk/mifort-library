import { Observable, of } from 'rxjs';
import { Book, UsersQueueItem } from '../models/Book';
import { map } from 'rxjs/operators';
import { ResponseItem } from '../models/Item';
import { Comment, CommentDTO } from '../models/Comment';
import { UserDTO, User } from '../models/User';

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
  author: string[];
  description: string;
  labels?: ResponseItem[];
  publishedDate: string;
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
        id: '1',
        createdDate: '2019-03-20T08:43:41.043Z',
        comments: [],
        details: {
          title: '1BLA',
          image: 'http://www.angelique-world.ru/cover13.gif',
          author: [
            'HENA',
            'Author'
          ],
          description: 'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее из сброшюрованных или отдельных',
          publishedDate: '2019-03-20T08:43:41.043Z',
          labels: [
            { id: '1', name: 'JS' },
            { id: '3', name: 'TS' },
          ],
        },
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
        id: '1',
        createdDate: '2019-03-20T08:43:41.043Z',
        comments: [],
        details: {
          title: '1BLA',
          image: 'http://www.angelique-world.ru/cover13.gif',
          author: [
            'HENA',
            'Author'
          ],
          description: 'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее из сброшюрованных или отдельных',
          publishedDate: '2019-03-20T08:43:41.043Z',
          labels: [
            { id: '1', name: 'JS' },
            { id: '3', name: 'TS' },
          ],
        },
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
      map(list => this.bookDtoToModel(list))
    );
  }

  public getTakenByMe(): Observable<Book[]> {
    return of([
      {
        id: '1',
        createdDate: '2019-03-20T08:43:41.043Z',
        comments: [],
        details: {
          title: '1BLA',
          image: 'http://www.angelique-world.ru/cover13.gif',
          author: [
            'HENA',
            'Author'
          ],
          description: 'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее из сброшюрованных или отдельных',
          publishedDate: '2019-03-20T08:43:41.043Z',
          labels: [
            { id: '1', name: 'JS' },
            { id: '3', name: 'TS' },
          ],
        },
        status: 'taken',
        statusDetails: {
          takenBy: {
            id: '987654',
            email: 'irina@mail.com',
            nickName: 'Irina',
            role: 'user'
          },
          takenFrom: '2019-03-20T08:43:41.043Z',
          takenTo: '2019-03-29T08:43:41.043Z',
          usersQueue: [
            {
              user: {
                id: '123',
                email: 'irina@mail.com',
                nickName: 'Marina',
                role: 'user'
              },
              from: '2019-03-20T08:43:41.043Z',
              to: '2019-04-20T08:43:41.043Z',
            },
            {
              user: {
                id: '987654',
                email: 'irina@mail.com',
                nickName: 'Irina',
                role: 'user'
              },
              from: '2019-04-20T08:43:41.043Z',
              to: '2019-05-15T08:43:41.043Z',
            },
            {
              user: {
                id: '123',
                email: 'irina@mail.com',
                nickName: 'Lena',
                role: 'user'
              },
              from: '2019-05-15T08:43:41.043Z',
              to: '2019-06-03T08:43:41.043Z',
            }
          ]
        }
      },
      {
        id: '1',
        createdDate: '2019-03-20T08:43:41.043Z',
        comments: [],
        details: {
          title: '1BLA',
          image: 'http://www.angelique-world.ru/cover13.gif',
          author: [
            'HENA',
            'Author'
          ],
          description: 'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее из сброшюрованных или отдельных',
          publishedDate: '2019-03-20T08:43:41.043Z',
          labels: [
            { id: '1', name: 'JS' },
            { id: '3', name: 'TS' },
          ],
        },
        status: 'taken',
        statusDetails: {
          takenBy: {
            id: '987654',
            email: 'irina@mail.com',
            nickName: 'Irina',
            role: 'user'
          },
          takenFrom: '2019-03-20T08:43:41.043Z',
          takenTo: '2019-03-30T08:43:41.043Z'
        }
      },
      {
        id: '1',
        createdDate: '2019-03-20T08:43:41.043Z',
        comments: [],
        details: {
          title: '1BLA',
          image: 'http://www.angelique-world.ru/cover13.gif',
          author: [
            'HENA',
            'Author'
          ],
          description: 'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее из сброшюрованных или отдельных',
          publishedDate: '2019-03-20T08:43:41.043Z',
          labels: [
            { id: '1', name: 'JS' },
            { id: '3', name: 'TS' },
          ],
        },
        status: 'taken',
        statusDetails: {
          takenBy: {
            id: '987654',
            email: 'irina@mail.com',
            nickName: 'Irina',
            role: 'user'
          },
          takenFrom: '2019-03-20T08:43:41.043Z',
          takenTo: '2019-04-04T08:43:41.043Z',
          usersQueue: [
            {
              user: {
                id: '123',
                email: 'irina@mail.com',
                nickName: 'Lena',
                role: 'user'
              },
              from: '2019-05-15T08:43:41.043Z',
              to: '2019-06-03T08:43:41.043Z',
            }
          ]
        }
      }
    ]).pipe(
      map(list => this.bookDtoToModel(list))
    );
  }

  public getBooksList(): Observable<Book[]> {
    return of([
      {
        id: '1',
        createdDate: '2019-03-20T08:43:41.043Z',
        details: {
          title: 'Совершенный код. Мастер-класс',
          image: 'https://s4-goods.ozstatic.by/2000/206/15/1/1015206_0.jpg',
          author: [
            'Стив МакКоннелл'
          ],
          description: 'Более 10 лет первое издание этой книги считалось одним из лучших практических руководств по программированию. ' +
            'Сейчас эта книга полностью обновлена с учетом современных тенденций и технологий и дополнена сотнями новых примеров, ' +
            'иллюстрирующих искусство и науку программирования. Опираясь на академические исследования, с одной стороны, и практический ' +
            'опыт коммерческих разработок ПО с другой, автор синтезировал из самых эффективных методик и наиболее эффективных принципов ' +
            'ясное прагматичное руководство. Каков бы ни был ваш профессиональный уровень, с какими бы средствами разработками вы ни ' +
            'работали, какова бы ни была сложность вашего проекта, в этой книге вы найдете нужную информацию, она заставит вас ' +
            'размышлять, поможет создать совершенный код.\n\n' +
            'Книга состоит из 35 глав, предметного указателя и библиографии.',
          publishedDate: '2017-01-01T00:00:00.043Z',
          labels: [
            { id: '1', name: 'JS' },
            { id: '3', name: 'TS' },
          ],
        },
        comments: [
          {
            id: '12',
            user: {
              id: '987654',
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
              from: '2019-05-15T08:43:41.043Z',
              to: '2019-06-03T08:43:41.043Z',
            }
          ]
        }
      },
      {
        id: '2',
        createdDate: '2019-03-20T08:43:41.043Z',
        details: {
          title: 'Программист-прагматик. Путь от подмастерья к мастеру',
          image: 'https://ozon-st.cdn.ngenix.net/multimedia/1000543072.jpg',
          author: ['Эндрю Хант', 'Дэвид Томас'],
          description: 'Находясь на переднем крае программирования, книга "Программист-прагматик" абстрагируется от всевозрастающей ' +
            'специализации и технических тонкостей разработки программ на современном уровне, чтобы исследовать суть процесса - ' +
            'требования к работоспособной и поддерживаемой программе, приводящей пользователей в восторг. Книга охватывает различные ' +
            'темы - от личной ответственности и карьерного роста до архитектурных методик, придающих программам гибкость и простоту ' +
            'в адаптации и повторном использовании.',
          publishedDate: '2009-01-01T00:00:00.043Z',
          labels: [
            { id: '1', name: 'JS' },
            { id: '3', name: 'TS' },
          ],
        },
        comments: [],
        status: 'taken',
        statusDetails: {
          takenBy: {
            id: '123',
            email: 'irina@mail.com',
            nickName: 'Irina',
            role: 'user'
          },
          takenFrom: '2019-03-20T08:43:41.043Z',
          takenTo: '2019-04-20T08:43:41.043Z',
          usersQueue: [
            {
              user: {
                id: '123',
                email: 'irina@mail.com',
                nickName: 'Marina',
                role: 'user'
              },
              from: '2019-03-20T08:43:41.043Z',
              to: '2019-04-20T08:43:41.043Z',
            },
            {
              user: {
                id: '987654',
                email: 'irina@mail.com',
                nickName: 'Irina',
                role: 'user'
              },
              from: '2019-04-20T08:43:41.043Z',
              to: '2019-05-15T08:43:41.043Z',
            },
            {
              user: {
                id: '123',
                email: 'irina@mail.com',
                nickName: 'Lena',
                role: 'user'
              },
              from: '2019-05-15T08:43:41.043Z',
              to: '2019-06-03T08:43:41.043Z',
            }
          ]
        }
      },
      {
        id: '2',
        createdDate: '2019-03-20T08:43:41.043Z',
        details: {
          title: 'Программист-прагматик. Путь от подмастерья к мастеру',
          image: 'https://ozon-st.cdn.ngenix.net/multimedia/1000543072.jpg',
          author: ['Эндрю Хант', 'Дэвид Томас'],
          description: 'Находясь на переднем крае программирования, книга "Программист-прагматик" абстрагируется от всевозрастающей ' +
            'специализации и технических тонкостей разработки программ на современном уровне, чтобы исследовать суть процесса - ' +
            'требования к работоспособной и поддерживаемой программе, приводящей пользователей в восторг. Книга охватывает различные ' +
            'темы - от личной ответственности и карьерного роста до архитектурных методик, придающих программам гибкость и простоту ' +
            'в адаптации и повторном использовании.',
          publishedDate: '2009-01-01T00:00:00.043Z',
          labels: [
            { id: '1', name: 'JS' },
            { id: '3', name: 'TS' },
          ],
        },
        comments: [
          {
            id: '12',
            user: {
              id: '123',
              email: 'irina@mail.com',
              nickName: 'Nikita',
              role: 'user'
            },
            text: 'Несмотря на небольшой объем, книга содержит много полезной информации.',
            type: 'like',
            date: '2019-02-20T08:43:41.043Z'
          },
          {
            id: '12',
            user: {
              id: '123',
              email: 'irina@mail.com',
              nickName: 'Vitaly',
              role: 'user'
            },
            text: 'Книга заслуживает твёрдой "четвёрки". Несмотря на предыдущие отзывы,хочу сказать:перевод и качество бумаги очень даже ' +
              'ничего. Насчёт перевода лично я не нашёл никаких нареканий,а качество бумаги и печати оправдывают стоимость книги. В ' +
              'тексте книжки приведено множество полезных советов,примеров из жизни,частых ошибок. Мне.как начинающему программисту,в ' +
              'разработке программ очень даже помогло. Понятное изложение,нужный материал,выводы к каждому разделу-это всё порадовало.',
            type: 'like',
            date: '2019-02-20T08:43:41.043Z'
          },
          {
            id: '12',
            user: {
              id: '123',
              email: 'irina@mail.com',
              nickName: 'Nika',
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
            id: '123',
            email: 'irina@mail.com',
            nickName: 'Irina',
            role: 'user'
          },
          takenFrom: '2019-03-20T08:43:41.043Z',
          takenTo: '2019-04-20T08:43:41.043Z',
          usersQueue: [
            {
              user: {
                id: '123',
                email: 'irina@mail.com',
                nickName: 'Marina',
                role: 'user'
              },
              from: '2019-03-20T08:43:41.043Z',
              to: '2019-04-20T08:43:41.043Z',
            },
            {
              user: {
                id: '123',
                email: 'irina@mail.com',
                nickName: 'Lena',
                role: 'user'
              },
              from: '2019-05-15T08:43:41.043Z',
              to: '2019-06-03T08:43:41.043Z',
            }
          ]
        }
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

  public takeBook(bookId: string, timeTo: string) {
    console.log(`Take book: ${bookId} till ${timeTo}`);
  }

  private bookDtoToModel(booksDTOs: BookDTO[]): Book[] {
    return booksDTOs.map(dto => new Book(
      dto.id,
      dto.details,
      dto.status,
      dto.createdDate,
      this.commentsDtoToModel(dto.comments),
      dto.statusDetails,
    ));
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
