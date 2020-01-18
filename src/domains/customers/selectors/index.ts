import { createSelector } from 'reselect';
import Types from 'SharedTypes';
import { TCustomer } from '../services';

const getIsLoading = (state: Types.TRootState) => state.customers.isLoading;

const getCustomersEntities = (state: Types.TRootState) =>
  state.customers.entities;

const getEditCustomer = (state: Types.TRootState) =>
  state.customers.editCustomer;

export const getCustomersListProps = createSelector(
  getIsLoading,
  getCustomersEntities,
  (isLoading, customers) => ({
    isLoading,
    customers:
      customers &&
      customers.map((customer: TCustomer) => ({
        ...customer,
        budget: customer.budget.toFixed(2),
        budget_spent: customer.budget_spent.toFixed(2),
        budget_left: (customer.budget - customer.budget_spent).toFixed(2)
      }))
  })
);

export const getEditCustomerProps = createSelector(
  getEditCustomer,
  editCustomer => ({ editCustomer })
);
