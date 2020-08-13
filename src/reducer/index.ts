import { employeeAddNew, employeeRemove, employeeChange } from './actionCreator/employeeAction';
import { historyAdd } from './actionCreator/historyAction';
import { ADD_EMPLOYEE, REMOVE_EMPLOYEE, CHANGE_EMPLOYEE, ADD_HISTORY } from './constants';

type DepartmentId = number;

interface Department {
  id: DepartmentId;
  name: string;
}

type EmployeeId = number;

export interface Employee {
  id?: EmployeeId;
  firstName: string;
  lastName: string;
  position: string;
  employmentDate: Date;
  mentorId?: EmployeeId;
  department: DepartmentId;
}
export interface IHistory {
  date: Date;
  text: string;
}
export interface IInitialState {
  employees: (Employee | never)[];
  histories: (IHistory | never)[];
}

class NeverError extends Error {
  constructor(value: never) {
    super(`Unreachable statement: ${value}`);
  }
}

export const initialState: IInitialState = {
  employees: [],
  histories: [],
};

export type TAction =
  | ReturnType<typeof employeeAddNew>
  | ReturnType<typeof employeeRemove>
  | ReturnType<typeof employeeChange>
  | ReturnType<typeof historyAdd>;

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
