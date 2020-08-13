import { IInitialState, TAction } from './reducer/index';
import React, { createContext } from 'react';

export type TDefaultValue = {
  store: IInitialState;
  dispatch: React.Dispatch<TAction>;
};

const defaultValue: Partial<TDefaultValue> = {};

export const AppContext = createContext(defaultValue);
