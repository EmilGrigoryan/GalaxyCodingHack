import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';

import cardsList from '../FullMap/sectors';
import CardDescription from './CardDescription';

export interface ISingleMap {
  name?: string
}

interface ParamTypes {
  id: string
}

const SingleMap: (props: ISingleMap) => JSX.Element = (props:ISingleMap) => {
  const { id } = useParams<ParamTypes>();
  return (
    <div>
          {cardsList.filter(card => card.id === id).map(filteredCard => (
            <>
              <NavBar name={filteredCard.title} />
              <CardDescription status={filteredCard.status} description={filteredCard.description}/>
            </>
          ))}
    </div>
  );
};

export default SingleMap;
