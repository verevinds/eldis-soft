import * as React from 'react';
import Nav from '../components/Nav/Nav';

const Header: React.FC = () => {
  return (
    <header className='bg-info bg-gradient'>
      <Nav />
    </header>
  );
};

export default React.memo(Header);
