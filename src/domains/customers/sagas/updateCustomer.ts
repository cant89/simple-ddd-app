import { put, call, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { ACTION_TYPES } from '../constants';
import * as actions from '../actions';
import { updateCustomer } from '../services';

function* updateCustomerSaga({
  payload
}: actions.IUpdateCustomerRequest): SagaIterator {
  const result = yield call(updateCustomer, payload);

  if (result.isSuccess()) {
    yield put(actions.updateCustomerSucceeded(result.getSuccessData()));
  } else {
    yield put(actions.updateCustomerFailed(result.getError()));
  }
}

export function* watchUpdateCustomerSaga(): SagaIterator {
  yield takeLatest(ACTION_TYPES.UPDATE_CUSTOMER_REQUEST, updateCustomerSaga);
}
