import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Page404.scss';

export interface IPage404 {}

const Page404: React.FC<IPage404> = () => {
  /*I didn’t waste time typing the original 404 page. The html layout of this page is copy-paste*/
  return (
    <div className='wrap'>
      <div className='logo'>
        <h1>404</h1>
        <p> Sorry - File not Found!</p>
        <div className='sub'>
          <p>
            <NavLink to='/'>Вернуться на главную</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Page404);
