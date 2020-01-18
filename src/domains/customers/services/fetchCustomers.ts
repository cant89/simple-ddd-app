import Result from '#/shared/helpers/Result';
import { ENDPOINT } from '../constants';
import customersInstance from '#/shared/services/customersApiInstance';
import { request, REQUEST_ACTION } from '#/shared/services/api';

export type TCustomer = {
  id: number;
  name: string;
  budget: number;
  budget_spent: number;
  date_of_first_purchase: string;
};

export type TRawCustomers = TCustomer[];

export type TFetchCustomers = () => Promise<Result>;
export const fetchCustomers: TFetchCustomers = async () => {
  const result = await request({
    action: REQUEST_ACTION.GET,
    axiosInstance: customersInstance,
    endpoint: ENDPOINT.GET_CUSTOMERS
  });

  return new Result(result);
};
