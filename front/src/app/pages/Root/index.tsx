import React from 'react';
import NavBar from '../../components/NavBar';
import NewsItem from './NewsItem';

import s from './Root.module.scss';

const Root: React.FC = () => {

  const newsList = [{
    id: '1',
    title: 'Устранена проблема в пятом секторе',
    description: 'Проблема была устранена 5го апреля 2021 года. Ответственный за починку основной части в пятом секторе является Мартынов А.А.',
    body: '',
    created: new Date('2021-04-05T03:24:00'),
    updated: new Date('1995-12-17T03:24:00'),
  },
    {
      id: '2',
      title: 'Температура достигла высоких значений',
      description: 'Срочно вызвать бригаду 23 для устранения проблемы',
      body: '',
      created: new Date('2021-04-05T03:24:00'),
      updated: new Date('1995-12-17T03:24:00'),
    },
    {
      id: '3',
      title: 'Устранена проблема в третьем секторе',
      description: 'Проблема была устранена 1го апреля 2021 года. Ответственными за починку основной части в третьем секторе является Мартынов А.А. и Гурченко И.А.',
      body: '',
      created: new Date('2021-04-05T03:24:00'),
      updated: new Date('1995-12-17T03:24:00'),
    }];

  return (
    <div>
      <NavBar name="Notifications" />
      <div className={s.main}>
        {newsList.map((item) => {
          return <NewsItem key={item.id} post={item} />;
        })}
      </div>
    </div>
  );
};

export default Root;
