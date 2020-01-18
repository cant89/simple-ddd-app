import { all, fork } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { SagaIterator } from '@redux-saga/core';

import { sagas as customersSagas } from '#/domains/customers';

function* root(): SagaIterator {
  yield all([
    fork(customersSagas.watchFetchCustomersSaga),
    fork(customersSagas.watchUpdateCustomerSaga),
    fork(routinePromiseWatcherSaga)
  ]);
}
export default root;
