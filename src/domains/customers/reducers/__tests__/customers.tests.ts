import customers, { initialState } from '..';
import { ACTION_TYPES } from '../../constants';

const mockedError = {
  message: 'error message',
  status: 401
};

describe('customers reducers', () => {
  describe('updateCustomerRequest', () => {
    it('update state properly', () => {
      const result = customers(undefined, {
        type: ACTION_TYPES.UPDATE_CUSTOMER_REQUEST
      });

      expect(result).toEqual({
        ...initialState,
        editCustomer: {
          isLoading: true
        }
      });
    });
  });

  describe('updateCustomerSucceeded', () => {
    it('update state properly', () => {
      const payload = [
        {
          id: 1,
          name: 'Martian Firma',
          budget: 100000.0,
          budget_spent: 4500.0,
          date_of_first_purchase: '2119-07-07'
        },
        {
          id: 2,
          name: 'Solar Firma',
          budget: 1123.22,
          budget_spent: 451.3754,
          date_of_first_purchase: '2120-01-14'
        }
      ];
      const result = customers(undefined, {
        type: ACTION_TYPES.UPDATE_CUSTOMER_SUCCEEDED,
        payload
      });

      expect(result).toEqual({
        ...initialState,
        entities: payload,
        editCustomer: {
          isLoading: false,
          succeeded: true
        }
      });
    });
  });

  describe('updateCustomerFailed', () => {
    it('update state properly', () => {
      const payload = mockedError;
      const result = customers(undefined, {
        type: ACTION_TYPES.UPDATE_CUSTOMER_FAILED,
        payload
      });

      expect(result).toEqual({
        ...initialState,
        editCustomer: {
          isLoading: false,
          error: payload
        }
      });
    });
  });

  describe('updateCustomerReset', () => {
    it('update state properly', () => {
      const result = customers(undefined, {
        type: ACTION_TYPES.UPDATE_CUSTOMER_RESET
      });

      expect(result).toEqual({
        ...initialState,
        editCustomer: undefined
      });
    });
  });
});
