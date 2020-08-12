import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageHome from '../page/PageHome/PageHome';
import Page404 from '../page/Page404/Page404';
import PageHistory from '../page/PageHistory/PageHistory';

export interface IBody {}

const Body: React.FC<IBody> = () => {
  return (
    <main className='container-fluid'>
      <Switch>
        <Route exact path='/' component={PageHome} />
        <Route path='/history' component={PageHistory} />
        <Route path='*' component={Page404} />
      </Switch>
    </main>
  );
};

export default React.memo(Body);
