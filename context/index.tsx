import { createContext } from 'react';

interface IEContextValues {
    getHeaders?: Function
}

export const defaultContextValue: IEContextValues = {
  getHeaders: () => {},
};

export const mainContext = createContext(defaultContextValue);
