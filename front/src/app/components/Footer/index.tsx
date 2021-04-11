import React from 'react';

import s from './Footer.module.scss';

interface IProps {
  name?: string;
}

const NavBar: React.FC<IProps> = ({ name }) => {
  return (
    <div className={s.root}>
     footer
    </div>
  );
};

export default NavBar;
