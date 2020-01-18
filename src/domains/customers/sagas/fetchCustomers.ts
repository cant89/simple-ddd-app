import { put, call, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { ACTION_TYPES } from '../constants';
import * as actions from '../actions';
import { fetchCustomers } from '../services';

function* fetchCustomersSaga(): SagaIterator {
  const result = yield call(fetchCustomers);

  if (result.isSuccess()) {
    yield put(actions.fetchCustomersSucceeded(result.getSuccessData()));
  } else {
    yield put(actions.fetchCustomersFailed(result.getError()));
  }
}

export function* watchFetchCustomersSaga(): SagaIterator {
  yield takeLatest(ACTION_TYPES.FETCH_CUSTOMERS_REQUEST, fetchCustomersSaga);
}
