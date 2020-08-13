import { IInitialState, TAction } from './reducer/interfaceReducer';
import React, { createContext } from 'react';

export type TDefaultValue = {
  store: IInitialState;
  dispatch: React.Dispatch<TAction>;
};

const defaultValue: Partial<TDefaultValue> = {};

export const AppContext = createContext(defaultValue);
