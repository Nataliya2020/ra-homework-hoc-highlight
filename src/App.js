import List from './components/List';
import {v4 as uuid} from "uuid";

export default function App() {
  const list = [
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50,
      id: uuid()
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12,
      id: uuid()
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175,
      id: uuid()
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532,
      id: uuid()
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253,
      id: uuid()
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
      id: uuid()
    },
  ];

  return (
    <List list={list}/>
  );
}
