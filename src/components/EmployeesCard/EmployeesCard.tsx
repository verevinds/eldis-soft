import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Department, Employee } from '../../reducer/interfaceReducer';
import { AppContext } from '../../AppContext';
import { employeeRemove } from '../../reducer/actionCreator/employeeAction';
import EmployeesAdd from '../EmployeesAdd/EmployeesAdd';
import { historyAdd } from '../../reducer/actionCreator/historyAction';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: '0.2em',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export interface IEmployeesCard {
  employee: Employee;
  index: number;
}

const EmployeesCard: React.FC<IEmployeesCard> = ({ employee, index }) => {
  const classes = useStyles();
  const [change, setChange] = React.useState(false);
  const { store, dispatch } = React.useContext(AppContext);

  const departmentName = React.useMemo(() => {
    const name = store?.departments.find(
      (department: Department) => department.id === employee.department,
    )?.name;

    return name;
  }, [store, employee]);

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            {`Табельный номер: ${employee.id}`}
          </Typography>
          <Typography variant='h5' component='h2'>
            {`${employee.lastName}`}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            {`${employee.firstName}`}
          </Typography>
          <Typography variant='body2' component='p'>
            {`Отдел: ${departmentName}`}
          </Typography>
          <Typography variant='body2' component='p'>
            {`Должность: ${employee.position}`}
          </Typography>
          {!!employee.mentorId && (
            <Typography variant='body2' component='p'>
              {`Руководитель: ${employee.mentorId}`}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button size='small' onClick={() => setChange(true)}>
            Редактировать
          </Button>
          <Button
            size='small'
            variant='contained'
            color='secondary'
            onClick={() => {
              if (dispatch) {
                dispatch(
                  historyAdd({
                    date: new Date(),
                    text: `Изменены данные по сотруднику ${store?.employees[index].lastName} ${store?.employees[index].firstName}`,
                  }),
                );
                dispatch(employeeRemove(index));
              }
            }}>
            Удалить
          </Button>
        </CardActions>
      </Card>
      <EmployeesAdd
        handleToggle={() => setChange(false)}
        show={change}
        title='Редактирование сотрудника'
        employeeFor={{ index, employee }}
      />
    </>
  );
};

export default React.memo(EmployeesCard);
