import Result from '#/shared/helpers/Result';
import { ENDPOINT } from '../constants';
import customersInstance from '#/shared/services/customersApiInstance';
import { request, REQUEST_ACTION } from '#/shared/services/api';

export type TCustomerData = {
  id: number;
  name?: string;
  budget?: number;
  budget_spent?: number;
  date_of_first_purchase?: string;
};

export type TUpdateCustomer = (data: TCustomerData) => Promise<Result>;

export const updateCustomer: TUpdateCustomer = async data => {
  const result = await request({
    action: REQUEST_ACTION.POST,
    axiosInstance: customersInstance,
    endpoint: `${ENDPOINT.UPDATE_CUSTOMERS}/${data.id}`,
    data
  });

  return new Result(result);
};
