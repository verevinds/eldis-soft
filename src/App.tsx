import * as React from 'react';
import Body from './layout/Body';
import Header from './layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { initialState, reducer } from './reducer';
import { AppContext } from './AppContext';

const App: React.FC = () => {
  const [store, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    console.log('store', store);
  }, [store]);

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      <Router>
        <Header />
        <Body />
      </Router>
    </AppContext.Provider>
  );
};

export default React.memo(App);
