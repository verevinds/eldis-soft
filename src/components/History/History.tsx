import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { AppContext } from '../../AppContext';
import { IHistory } from '../../reducer';

const History: React.FC = () => {
  const { store } = React.useContext(AppContext);
  if (store) var { histories } = store;
  return (
    <>
      {histories.map((history: IHistory) => (
        <List component='nav' aria-label='secondary mailbox folders'>
          <ListItem button>
            <ListItemText primary={history.text} secondary={history.date.toISOString()} />
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default React.memo(History);
