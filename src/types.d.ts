import { StateType } from 'typesafe-actions';
import { History } from 'history';
import { Store } from 'redux';
import { Saga } from 'redux-saga';
import reducers from '#/app/reducers';

declare module 'SharedTypes' {
  export type TRootState = StateType<reducers>;
  export type TReduxStore = Store;
  export type THistory = History;
  export type TSaga = Saga;
}
