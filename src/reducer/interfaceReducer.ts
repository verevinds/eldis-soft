import { employeeAddNew, employeeRemove, employeeChange } from './actionCreator/employeeAction';
import { historyAdd } from './actionCreator/historyAction';

export type DepartmentId = number;

export interface Department {
  id: DepartmentId;
  name: string;
}

export type EmployeeId = number;

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
  departments: (Department | never)[];
}

export type TAction =
  | ReturnType<typeof employeeAddNew>
  | ReturnType<typeof employeeRemove>
  | ReturnType<typeof employeeChange>
  | ReturnType<typeof historyAdd>;
