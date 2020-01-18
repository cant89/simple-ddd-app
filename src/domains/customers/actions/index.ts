import { AnyAction } from 'redux';
import { action } from 'typesafe-actions';

import { TErrorResult } from '#/shared/helpers/Result';
import { ACTION_TYPES } from '../constants';
import { TRawCustomers, TCustomerData } from '../services';

export interface IFetchCustomersRequest extends AnyAction {}
export interface IFetchCustomersFailed extends AnyAction {
  payload: TErrorResult;
}
export interface IFetchCustomersSucceeded extends AnyAction {
  payload: TRawCustomers;
}

export const fetchCustomersRequest = (): IFetchCustomersRequest =>
  action(ACTION_TYPES.FETCH_CUSTOMERS_REQUEST);

export const fetchCustomersSucceeded = (
  payload: IFetchCustomersSucceeded['payload']
): IFetchCustomersSucceeded =>
  action(ACTION_TYPES.FETCH_CUSTOMERS_SUCCEEDED, payload);

export const fetchCustomersFailed = (
  payload: IFetchCustomersFailed['payload']
): IFetchCustomersFailed =>
  action(ACTION_TYPES.FETCH_CUSTOMERS_FAILED, payload);

export interface IUpdateCustomerRequest extends AnyAction {
  payload: TCustomerData;
}
export interface IUpdateCustomerFailed extends AnyAction {
  payload: TErrorResult;
}
export interface IUpdateCustomerSucceeded extends AnyAction {
  payload: TCustomerData;
}
export interface IUpdateCustomerReset extends AnyAction {}

export const updateCustomerRequest = (
  payload: IUpdateCustomerRequest['payload']
): IUpdateCustomerRequest =>
  action(ACTION_TYPES.UPDATE_CUSTOMER_REQUEST, payload);

export const updateCustomerSucceeded = (
  payload: IUpdateCustomerSucceeded['payload']
): IUpdateCustomerSucceeded =>
  action(ACTION_TYPES.UPDATE_CUSTOMER_SUCCEEDED, payload);

export const updateCustomerFailed = (
  payload: IUpdateCustomerFailed['payload']
): IUpdateCustomerFailed =>
  action(ACTION_TYPES.UPDATE_CUSTOMER_FAILED, payload);

export const updateCustomerReset = (): IUpdateCustomerReset =>
  action(ACTION_TYPES.UPDATE_CUSTOMER_RESET);
