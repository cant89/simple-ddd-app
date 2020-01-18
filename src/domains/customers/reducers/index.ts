import { AnyAction } from 'redux';

import { ACTION_TYPES } from '../constants';
import * as customersActions from '../actions';
import { TRawCustomers } from '../services';
import { TErrorResult } from '#/shared/helpers/Result';

export type TEditCustomer = {
  isLoading?: boolean;
  error?: TErrorResult;
  succeeded: boolean;
};

export type TInitialState = {
  isLoading?: boolean;
  entities?: TRawCustomers;
  error?: TErrorResult;
  editCustomer?: TEditCustomer;
};

export const initialState = {};

const fetchCustomersRequest = (state: TInitialState): TInitialState => ({
  ...state,
  isLoading: true
});

const fetchCustomersSucceeded = (
  state: TInitialState,
  action: customersActions.IFetchCustomersSucceeded
): TInitialState => ({
  ...state,
  isLoading: false,
  entities: action.payload
});

const fetchCustomersFailed = (
  state: TInitialState,
  action: customersActions.IFetchCustomersFailed
) => ({
  ...state,
  isLoading: false,
  error: action.payload
});

const updateCustomerRequest = (state: TInitialState) => ({
  ...state,
  editCustomer: {
    isLoading: true
  }
});

const updateCustomerSucceeded = (
  state: TInitialState,
  action: customersActions.IUpdateCustomerSucceeded
) => ({
  ...state,
  entities: action.payload,
  editCustomer: {
    isLoading: false,
    succeeded: true
  }
});

const updateCustomerFailed = (
  state: TInitialState,
  action: customersActions.IUpdateCustomerFailed
) => ({
  ...state,
  editCustomer: {
    isLoading: false,
    error: action.payload
  }
});

const updateCustomerReset = (state: TInitialState) => ({
  ...state,
  editCustomer: undefined
});

export default (state: TInitialState = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_CUSTOMERS_REQUEST:
      return fetchCustomersRequest(state);
    case ACTION_TYPES.FETCH_CUSTOMERS_SUCCEEDED:
      return fetchCustomersSucceeded(
        state,
        action as customersActions.IFetchCustomersSucceeded
      );
    case ACTION_TYPES.FETCH_CUSTOMERS_FAILED:
      return fetchCustomersFailed(
        state,
        action as customersActions.IFetchCustomersFailed
      );

    case ACTION_TYPES.UPDATE_CUSTOMER_REQUEST:
      return updateCustomerRequest(state);
    case ACTION_TYPES.UPDATE_CUSTOMER_SUCCEEDED:
      return updateCustomerSucceeded(
        state,
        action as customersActions.IUpdateCustomerSucceeded
      );
    case ACTION_TYPES.UPDATE_CUSTOMER_FAILED:
      return updateCustomerFailed(
        state,
        action as customersActions.IUpdateCustomerFailed
      );

    case ACTION_TYPES.UPDATE_CUSTOMER_RESET:
      return updateCustomerReset(state);
    default:
      return state;
  }
};
