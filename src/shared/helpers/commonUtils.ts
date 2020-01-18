import fastDeepEqual from 'fast-deep-equal';

export const isObjectEmpty = (obj: object) => Object.entries(obj).length === 0;

export const trimStringSpaces = (str: string = '') =>
  str
    .toLowerCase()
    .trim()
    .replace(' ', '');

export type TIsDeepEqual = (a: any, b: any) => boolean;

export const isDeepEqual: TIsDeepEqual = (a, b) => fastDeepEqual(a, b);
