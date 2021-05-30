import { createContext } from 'react';

interface IEHeader {
    title?: string;
    metaDescription?: string
}

interface IEContextValues {
    headers: IEHeader
}

export const defaultContextValue: IEContextValues = {
  headers: {},
};

export const mainContext = createContext(defaultContextValue);
