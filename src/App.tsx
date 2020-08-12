import * as React from 'react';
import Body from './layout/Body';
import Header from './layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';

export interface IApp {}

const App: React.FC<IApp> = () => {
  return (
    <Router>
      <Header />
      <Body />
    </Router>
  );
};

export default React.memo(App);
