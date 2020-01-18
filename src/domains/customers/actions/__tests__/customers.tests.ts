import * as actions from '..';
import { ACTION_TYPES } from '../../constants';

const mockedError = {
  message: 'error message',
  status: 401
};

describe('customers actions', () => {
  describe('updateCustomerRequest', () => {
    it('should return correct action and payload', () => {
      const payload = {
        id: 1,
        name: 'Martian Firma',
        budget: 1000440.0,
        budget_spent: 4500.0,
        date_of_first_purchase: '2119-07-07'
      };

      const result = actions.updateCustomerRequest(payload);

      expect(result).toEqual({
        payload,
        type: ACTION_TYPES.UPDATE_CUSTOMER_REQUEST
      });
    });
  });

  describe('updateCustomerFailed', () => {
    it('should return correct action and payload', () => {
      const payload = mockedError;

      const result = actions.updateCustomerFailed(payload);

      expect(result).toEqual({
        payload,
        type: ACTION_TYPES.UPDATE_CUSTOMER_FAILED
      });
    });
  });

  describe('updateCustomerSucceeded', () => {
    it('should return correct action and payload', () => {
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
      const result = actions.updateCustomerSucceeded(payload);

      expect(result).toEqual({
        payload,
        type: ACTION_TYPES.UPDATE_CUSTOMER_SUCCEEDED
      });
    });
  });
});
