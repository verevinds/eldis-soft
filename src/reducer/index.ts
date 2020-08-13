import { ADD_EMPLOYEE, REMOVE_EMPLOYEE, CHANGE_EMPLOYEE, ADD_HISTORY } from './constants';
import { IInitialState, TAction } from './interfaceReducer';

export const initialState: IInitialState = {
  employees: [],
  histories: [],
  departments: [
    {
      id: 1,
      name: 'ИТ-отдел',
    },
    {
      id: 2,
      name: 'Кадры',
    },
  ],
};

export function reducer<T extends IInitialState>(state: T, action: TAction): T {
  let newEmployees;

  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.data],
      };
    case REMOVE_EMPLOYEE:
      newEmployees = [...state.employees];
      newEmployees.splice(action.index, 1);

      return {
        ...state,
        employees: newEmployees,
      };
    case CHANGE_EMPLOYEE:
      newEmployees = [...state.employees];
      newEmployees.splice(action.index, 1, action.data);

      return {
        ...state,
        employees: newEmployees,
      };
    case ADD_HISTORY:
      return {
        ...state,
        histories: [...state.histories, action.history],
      };
    default:
      return state;
  }
}
