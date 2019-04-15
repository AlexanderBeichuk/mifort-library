import * as moment from 'moment';

export const BOOK_ANG_INFO = {
  id: '1',
  createdDate: '2019-03-20T08:43:41.043Z',
  comments: [],
  details: {
    title: '1BLA',
    image: 'http://www.angelique-world.ru/cover13.gif',
    author: 'HENA, Author',
    description: 'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее из сброшюрованных или отдельных',
    publishedDate: '2019',
    labels: [
      { id: '1', name: 'JS' },
      { id: '3', name: 'TS' },
    ],
  }
};

export const BOOK_SOV_INFO = {
  id: '2',
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
  comments: [],
};

export const BOOK_PROG_INFO = {
  id: '3',
  createdDate: '2019-03-20T08:43:41.043Z',
  details: {
    title: 'Программист-прагматик. Путь от подмастерья к мастеру',
    image: 'https://ozon-st.cdn.ngenix.net/multimedia/1000543072.jpg',
    author: 'Эндрю Хант, Дэвид Томас',
    description: 'Находясь на переднем крае программирования, книга "Программист-прагматик" абстрагируется от всевозрастающей ' +
      'специализации и технических тонкостей разработки программ на современном уровне, чтобы исследовать суть процесса - ' +
      'требования к работоспособной и поддерживаемой программе, приводящей пользователей в восторг. Книга охватывает различные ' +
      'темы - от личной ответственности и карьерного роста до архитектурных методик, придающих программам гибкость и простоту ' +
      'в адаптации и повторном использовании.',
    publishedDate: '2009',
    pages: 896,
    isbn: '978-5-9909805-1-8',
    labels: [
      { id: '1', name: 'JS' },
      { id: '3', name: 'TS' },
    ],
  },
  comments: [],
};

export const COMMENT_POS_1 = {
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
};

export const COMMENT_POS_2 = {
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
};

export const COMMENT_POS_3 = {
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
};

export const COMMENT_NEG_1 = {
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
};

export const COMMENT_NEG_2 = {
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
  date: '2019-01-06T08:43:41.043Z'
};

export const USER_LENA = {
  id: '1',
  email: 'lena@mail.com',
  nickName: 'Lena',
  role: 'user'
};

export const USER_NIKITA = {
  id: '1',
  email: 'nikita@mail.com',
  nickName: 'Nikita',
  role: 'user'
};

export const USER_NIKA = {
  id: '2',
  email: 'nika@mail.com',
  nickName: 'Nika',
  role: 'user'
};

export const USER_VITALY = {
  id: '3',
  email: 'vitaly@mail.com',
  nickName: 'Vitaly',
  role: 'user'
};

export const USER_MARINA = {
  id: '4',
  email: 'marina@mail.com',
  nickName: 'Marina',
  role: 'user'
};

export const USER_ILYA = {
  id: '5',
  email: 'ilya@mail.com',
  nickName: 'Ilya',
  role: 'user'
};

export const USER_LERA = {
  id: '6',
  email: 'lera@mail.com',
  nickName: 'Lera',
  role: 'user'
};

export const USER_CURRENT = {
  id: 'currentUserId',
  email: 'ira@mail.com',
  nickName: 'Ira',
  role: 'user'
};

export const BOOK_TAKEN_BY_ME = {
  ...BOOK_PROG_INFO,
  id: '1',
  status: 'taken',
  statusDetails: {
    takenBy: USER_CURRENT,
    takenFrom: '2019-03-20T08:43:41.043Z',
    takenTo: moment().add(10, 'd').toString(),
    usersQueue: [
      {
        user: USER_ILYA,
        forWeeks: 4
      },
      {
        user: USER_LENA,
        forWeeks: 4
      },
    ]
  }
};

export const BOOK_MY_ENDING = {
  ...BOOK_PROG_INFO,
  id: '2',
  status: 'taken',
  statusDetails: {
    takenBy: USER_CURRENT,
    takenFrom: '2019-03-20T08:43:41.043Z',
    takenTo: moment().add(1, 'd').toString(),
    usersQueue: [
      {
        user: USER_ILYA,
        forWeeks: 4
      },
      {
        user: USER_LENA,
        forWeeks: 4
      },
    ]
  }
};

export const BOOK_MY_OVERDUE = {
  ...BOOK_PROG_INFO,
  id: '3',
  status: 'taken',
  statusDetails: {
    takenBy: USER_CURRENT,
    takenFrom: '2019-03-20T08:43:41.043Z',
    takenTo: '2019-04-02T08:43:41.043Z',
    usersQueue: [
      {
        user: USER_ILYA,
        forWeeks: 4
      },
      {
        user: USER_LENA,
        forWeeks: 4
      },
    ]
  }
};

export const BOOK_TAKEN = {
  ...BOOK_PROG_INFO,
  id: '4',
  status: 'taken',
  statusDetails: {
    takenBy: USER_VITALY,
    takenFrom: '2019-03-20T08:43:41.043Z',
    takenTo: moment().add(10, 'd').toString(),
    usersQueue: [
      {
        user: USER_ILYA,
        forWeeks: 4
      },
      {
        user: USER_LENA,
        forWeeks: 4
      },
    ]
  }
};

export const BOOK_ENDING = {
  ...BOOK_PROG_INFO,
  id: '5',
  status: 'taken',
  statusDetails: {
    takenBy: USER_NIKITA,
    takenFrom: '2019-03-20T08:43:41.043Z',
    takenTo: moment().add(1, 'd').toString(),
    usersQueue: [
      {
        user: USER_ILYA,
        forWeeks: 4
      },
      {
        user: USER_LENA,
        forWeeks: 4
      },
    ]
  }
};

export const BOOK_OVERDUE = {
  ...BOOK_PROG_INFO,
  id: '6',
  status: 'taken',
  statusDetails: {
    takenBy: USER_LERA,
    takenFrom: '2019-03-20T08:43:41.043Z',
    takenTo: '2019-04-02T08:43:41.043Z',
    usersQueue: [
      {
        user: USER_ILYA,
        forWeeks: 4
      },
      {
        user: USER_LENA,
        forWeeks: 4
      },
    ]
  }
};

export const BOOK_ME_IN_QUEUE = {
  ...BOOK_PROG_INFO,
  id: '7',
  status: 'taken',
  statusDetails: {
    takenBy: USER_LENA,
    takenFrom: '2019-03-20T08:43:41.043Z',
    takenTo: moment().add(10, 'd').toString(),
    usersQueue: [
      {
        user: USER_ILYA,
        forWeeks: 4
      },
      {
        user: USER_LERA,
        forWeeks: 4
      },
      {
        user: USER_CURRENT,
        forWeeks: 4
      },
      {
        user: USER_MARINA,
        forWeeks: 4
      },
    ]
  }
};

export const BOOK_POPULAR = {
  ...BOOK_SOV_INFO,
  id: '8',
  status: 'taken',
  statusDetails: {
    takenBy: USER_LENA,
    takenFrom: '2019-03-20T08:43:41.043Z',
    takenTo: moment().add(10, 'd').toString(),
    usersQueue: [
      {
        user: USER_ILYA,
        forWeeks: 4
      },
      {
        user: USER_LERA,
        forWeeks: 4
      },
      {
        user: USER_CURRENT,
        forWeeks: 4
      },
      {
        user: USER_MARINA,
        forWeeks: 4
      },
      {
        user: USER_NIKA,
        forWeeks: 4
      },
      {
        user: USER_NIKA,
        forWeeks: 4
      },
      {
        user: USER_NIKITA,
        forWeeks: 4
      },
    ]
  }
};
