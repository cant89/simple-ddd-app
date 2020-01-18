import React from 'react';
import ReactDOM from 'react-dom';
import Types from 'SharedTypes';

import Root from './Root';

const getInitialState = () => {
  const initialState =
    typeof window !== 'undefined' && window.__INITIAL_STATE__
      ? window.__INITIAL_STATE__
      : {};

  return initialState;
};

type TConfigureStore = (
  initialState: Types.TRootState,
  history: Types.THistory,
  reducers: object,
  sagas: Types.TSaga
) => Types.TReduxStore;

type TOptionType = {
  configureStore: TConfigureStore;
  history: Types.THistory;
  initialState?: Types.TRootState;
  reducers: object;
  sagas: Types.TSaga;
};

export default class App {
  history: Types.THistory;
  initialState: Types.TRootState;
  store: Types.TReduxStore;
  container!: HTMLElement;
  constructor(options: TOptionType) {
    const { configureStore, history, initialState, reducers, sagas } = options;

    if (typeof configureStore !== 'function') {
      throw new Error('Invalid createStore factory method');
    }

    if (typeof history === 'undefined' || !history) {
      throw new Error('No valid history provided');
    }

    this.history = history;

    this.initialState = initialState || getInitialState();

    this.store = configureStore(
      this.initialState,
      this.history,
      reducers,
      sagas
    );
  }

  mountToNode(node: HTMLElement): void {
    if (typeof node === 'undefined' || !node) {
      throw new Error('No valid DOM node provided');
    }

    this.container = node;
    this.render();
  }

  render(): void {
    if (typeof document !== 'undefined' && this.container) {
      const store = this.store;
      const history = this.history;

      ReactDOM.render(<Root store={store} history={history} />, this.container);
    }
  }

  destroy(): void {
    ReactDOM.unmountComponentAtNode(this.container);
  }
}
