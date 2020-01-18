import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Types from 'SharedTypes';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  collapsed: true
});

type TCreateRootReducer = (history: Types.THistory, reducers: object) => any;

const createRootReducer: TCreateRootReducer = (history, reducers) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers
  });

type TConfigureStore = (
  initialState: Types.TRootState,
  history: Types.THistory,
  reducers: object,
  sagas: Types.TSaga
) => Types.TReduxStore;

const configureStore: TConfigureStore = (
  initialState,
  history,
  reducers,
  sagas
) => {
  const composeEnhancer: typeof compose =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history, reducers),
    initialState,
    composeEnhancer(
      applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
    )
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
