import Nav from '../components/Nav/Nav';
import * as React from 'react';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className='bg-info bg-gradient'>
      <Nav />
    </header>
  );
};

export default React.memo(Header);
