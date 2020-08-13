import * as React from 'react';

import { Department, Employee } from '../../reducer/interfaceReducer';

import { AppContext } from '../../AppContext';

import { employeeAddNew, employeeChange } from '../../reducer/actionCreator/employeeAction';
import { historyAdd } from '../../reducer/actionCreator/historyAction';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export interface IEmployeesAdd {
  handleToggle: () => void;
  show: boolean;
  title?: string;
  employeeFor?: {
    index: number;
    employee: Employee;
  };
}

type IValidate<T> = {
  [K in keyof T]: boolean;
};

const useStyles = makeStyles({
  root: {
    minWidth: '100%',
  },
  option: {
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const EmployeesAdd: React.FC<IEmployeesAdd> = ({ handleToggle, show, title, employeeFor }) => {
  const classes = useStyles();
  const { store, dispatch } = React.useContext(AppContext);
  const [state, setState] = React.useState<Partial<Employee>>({});
  const [validate, setValidate] = React.useState<IValidate<Employee>>({
    department: true,
    employmentDate: true,
    firstName: true,
    lastName: true,
    position: true,
    id: true,
    mentorId: true,
  });

  React.useEffect(() => {
    if (employeeFor) setState(employeeFor.employee);
    else
      setState({
        employmentDate: new Date(),
      });
  }, [employeeFor]);

  const handleState = React.useCallback(
    (key: keyof Employee) => {
      return {
        numberValue: (event: React.ChangeEvent<HTMLInputElement>) =>
          setState({ ...state, [key]: Number(event.currentTarget.value) }),
        stringValue: (event: React.ChangeEvent<HTMLInputElement>) =>
          setState({ ...state, [key]: event.currentTarget.value }),
      };
    },
    [state],
  );

  const onSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (dispatch) dispatch(employeeAddNew(state as Employee));
    },
    [dispatch, state],
  );

  const handleClick = React.useCallback(() => {
    function checkValidate() {
      const localVaidate = validate;

      for (let key in localVaidate) {
        if (!!state[key]) {
          localVaidate[key] = true;
          setValidate({ ...validate, [key]: true });
        } else if (key !== 'id' && key !== 'mentorId') {
          localVaidate[key] = false;
          setValidate({ ...validate, [key]: false });
        }
      }
    }

    return {
      add: () => {
        checkValidate();

        if (!Object.values(validate).includes(false) && dispatch) {
          dispatch(employeeAddNew(state as Employee));
          dispatch(
            historyAdd({
              date: new Date(),
              text: `Добавлен сотрудник ${state.lastName} ${state.firstName}`,
            }),
          );
          handleToggle();
        }
      },

      save: () => {
        checkValidate();
        if (!Object.values(validate).includes(false) && dispatch && employeeFor) {
          dispatch(employeeChange(state as Employee, employeeFor.index));
          dispatch(
            historyAdd({
              date: new Date(),
              text: `Изменены данные по сотруднику ${state.lastName} ${state.firstName}`,
            }),
          );
          handleToggle();
        }
      },
    };
  }, [dispatch, state, validate, employeeFor]);

  return (
    <Dialog onClose={handleToggle} aria-labelledby='simple-dialog-title' open={show}>
      <DialogTitle id='simple-dialog-title'>
        {title ? title : `Добавление нового сотрудника`}
      </DialogTitle>
      <Card className={classes.root}>
        <form onSubmit={onSubmit}>
          <CardContent className={classes.content}>
            <TextField
              error={!validate.id}
              id='personnelNumber'
              label='Табельный номер'
              type='number'
              value={String(state.id) || ''}
              onChange={handleState('id').numberValue}
            />
            <TextField
              error={!validate.lastName}
              id='lastName'
              label='Фамилия'
              type='text'
              required
              value={state.lastName || ''}
              onChange={handleState('lastName').stringValue}
            />
            <TextField
              error={!validate.firstName}
              id='firstName'
              label='Имя'
              type='text'
              required
              value={state.firstName || ''}
              onChange={handleState('firstName').stringValue}
            />
            <FormControl error={!validate.department}>
              <InputLabel id='department'>Отдел</InputLabel>
              <Select
                labelId='department'
                id='department'
                value={String(state.department) || ''}
                inputProps={{
                  name: 'department',
                  id: 'age-native-simple',
                }}
                onChange={(
                  event: React.ChangeEvent<{
                    name?: string | undefined;
                    value: unknown;
                  }>,
                ) => {
                  const name = event.target.name as keyof typeof state;
                  setState({
                    ...state,
                    [name]: event.target.value,
                  });
                }}>
                <option aria-label='None' value='' className={classes.option} selected />

                {store?.departments.map((department: Department) => (
                  <option value={department.id} className={classes.option} key={department.id}>
                    {department.name}
                  </option>
                ))}
              </Select>
            </FormControl>

            <TextField
              error={!validate.position}
              id='position'
              label='Должность'
              type='text'
              required
              value={state.position || ''}
              onChange={handleState('position').stringValue}
            />
            <TextField
              error={!validate.mentorId}
              id='menter'
              label='Руководитель'
              type='number'
              value={String(state.mentorId) || ''}
              onChange={handleState('mentorId').numberValue}
            />
          </CardContent>
          <CardActions>
            <Button size='small' onClick={employeeFor ? handleClick().save : handleClick().add}>
              {employeeFor ? `Сохранить` : `Добавить`}
            </Button>
          </CardActions>
        </form>
      </Card>
    </Dialog>
  );
};

export default React.memo(EmployeesAdd);
