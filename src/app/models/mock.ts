import {Book} from './Book';
import {Label} from './Item';
import {User, UserRole} from './User';
import {Event} from './Event';

export const AUTHORIZED_USER =
  new User(
    '1',
    'ivan.ivanov@gmail.com',
    'Ivan Ivanov',
    'https://ozon-st.cdn.ngenix.net/multimedia/1013135735.jpg',
    UserRole.admin
  );

export const BOOKS: Book[] = [
  new Book('123456', '1BLA', 'http://www.angelique-world.ru/cover13.gif', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее ' +
    'из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей', 5, 3, ['1', '3', '4']),
  new Book('123456', '2BLA', 'https://primepublish.ru/content/images/new-elements/elems/step-3-9.png', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей', 3, 1, ['2', '6']),
  new Book('123456', '3BLA', 'https://editus.ru/img/services/verstka/cover_6.jpg', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей', 8, 5, ['2', '5']),
  new Book('123456', '4BLA', 'http://hpclub.ru/wp-content/uploads/2013/02/newhpcover.jpg', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей', 10, 5, ['3', '6']),
  new Book('123456', '5BLA', 'https://cdn.shazoo.ru/82030_t1QMGU8HPc_ps.jpeg', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей', 2, 2, ['6', '1', '2']),
  new Book('123456', '6BLA',
    'https://www.alpinabook.ru/upload/resize_cache/iblock/8c8/380_567_1/8c821d109a20e8db924b575691369600.jpg', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей', 2, 1, ['6', '2']),
  new Book('123456', '7BLA', 'https://ozon-st.cdn.ngenix.net/multimedia/1013135735.jpg', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей'),
  new Book('123456', '1BLA', 'http://www.angelique-world.ru/cover13.gif', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее ' +
    'из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей'),
  new Book('123456', '2BLA', 'https://primepublish.ru/content/images/new-elements/elems/step-3-9.png', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей'),
  new Book('123456', '3BLA', 'https://editus.ru/img/services/verstka/cover_6.jpg', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей'),
  new Book('123456', '4BLA', 'http://hpclub.ru/wp-content/uploads/2013/02/newhpcover.jpg', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей'),
  new Book('123456', '5BLA', 'https://cdn.shazoo.ru/82030_t1QMGU8HPc_ps.jpeg', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей'),
  new Book('123456', '6BLA',
    'https://www.alpinabook.ru/upload/resize_cache/iblock/8c8/380_567_1/8c821d109a20e8db924b575691369600.jpg', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей'),
  new Book('123456', '8BLA', 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg', 'HENA',
    'Кни́га — один из видов печатной продукции: непериодическое издание, ' +
    'состоящее из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей', 4, 1, ['4', '6', '1', '2'])
];

export const LABELS: Label[] = [
  new Label('1', 'JS'),
  new Label('2', 'Angular'),
  new Label('3', 'New'),
  new Label('4', 'HR'),
  new Label('5', 'Development'),
  new Label('6', 'React'),
];

export const EVENTS: Event[] = [
  new Event(
    '1',
    new Book('123456', '1BLA', 'http://www.angelique-world.ru/cover13.gif', 'HENA',
      'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее ' +
      'из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей', 5, 3, ['1', '3', '4']),
    AUTHORIZED_USER
    ),
  new Event(
    '2',
    new Book('123456', '1BLA', 'http://www.angelique-world.ru/cover13.gif', 'HENA',
      'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее ' +
      'из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей', 5, 3, ['1', '3', '4']),
    AUTHORIZED_USER
  ),
  new Event(
    '3',
    new Book('123456', '1BLA', 'http://www.angelique-world.ru/cover13.gif', 'HENA',
      'Кни́га — один из видов печатной продукции: непериодическое издание, состоящее ' +
      'из сброшюрованных или отдельных бумажных листов (страниц) или тетрадей', 5, 3, ['1', '3', '4']),
    AUTHORIZED_USER
  )
];

