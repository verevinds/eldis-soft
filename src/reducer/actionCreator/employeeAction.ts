import { Employee } from '..';
import { ADD_EMPLOYEE, REMOVE_EMPLOYEE, CHANGE_EMPLOYEE } from '../constants';

export const employeeAddNew = <T extends Employee>(
  data: T,
): { type: typeof ADD_EMPLOYEE; data: T } => ({ type: ADD_EMPLOYEE, data });

export const employeeRemove = (index: number): { type: typeof REMOVE_EMPLOYEE; index: number } => ({
  type: REMOVE_EMPLOYEE,
  index,
});

export const employeeChange = <T extends Employee>(
  data: T,
  index: number,
): { type: typeof CHANGE_EMPLOYEE; data: T; index: number } => ({
  type: CHANGE_EMPLOYEE,
  data,
  index,
});
