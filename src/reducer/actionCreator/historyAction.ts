import { IHistory } from '../interfaceReducer';
import { ADD_HISTORY } from '../constants';

export const historyAdd = <T extends IHistory>(
  history: T,
): { type: typeof ADD_HISTORY; history: T } => ({
  type: ADD_HISTORY,
  history,
});
