import React from 'react';
import Scheme1 from '../../assets/img/scheme1.png';
import Scheme2 from '../../assets/img/scheme2.png';

import s from './SingleMap.module.scss';

interface ICardItem {
  status?: string,
  description?: string,
}

const CardDescription: React.FC<ICardItem> = ({ status, description}) => {
  return (
      <div >
        <h1>{status}</h1>
        <img src={Scheme1} className={s.image}/>
      </div>
  );
};

export default CardDescription;

