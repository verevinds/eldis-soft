import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppContext, TDefaultValue } from '../../AppContext';
import EmployeesAdd from '../EmployeesAdd/EmployeesAdd';
import EmployeesCard from '../EmployeesCard/EmployeesCard';
import { Employee } from '../../reducer';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

const Employees: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const { store } = React.useContext(AppContext);
  const classes = useStyles();
  const handleToggle = React.useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <>
      {store?.employees.map((item: Employee, index: number) => (
        <EmployeesCard employee={item} index={index} />
      ))}
      <div className={classes.root}>
        <Fab aria-label={'Add'} className={classes.fab} color={'primary'}>
          <AddIcon onClick={handleToggle} />
        </Fab>
      </div>
      <EmployeesAdd {...{ handleToggle, show }} />
    </>
  );
};

export default React.memo(Employees);
