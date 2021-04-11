import React from 'react';
import NavBar from '../../components/NavBar';
import Card from './Card';

import s from './FullMap.module.scss';
import cardsList from './sectors';

const FullMap: React.FC = () => {
  return (
    <div>
      <NavBar name="Full Map" />
      <div className={s.main}>
        {cardsList.map((item) => {
          return <Card key={item.id} info={item} />;
        })}
      </div>
    </div>
  );
};

export default FullMap;
