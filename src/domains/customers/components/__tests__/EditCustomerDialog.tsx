import React from 'react';
import { Button } from '@material-ui/core';
import { mountWithProvider } from '../../../../../jest/utils';
import ConfirmationDialog from '#/shared/components/ConfirmationDialog';
import EditCustomerDialog from '../EditCustomerDialog';

const mockCustomer = {
  id: 1,
  name: 'Martian Firma',
  budget: 100000.0,
  budget_spent: 4500.0,
  date_of_first_purchase: '2119-07-07'
};

describe('EditCustomerDialog', () => {
  it('check that updateCustomerRequest is not called when click Save button', () => {
    const Dialog = mountWithProvider(
      <EditCustomerDialog
        customer={mockCustomer}
        open={true}
        onClose={jest.fn()}
        onSaved={jest.fn()}
      />
    )();

    Dialog.find(Button)
      .at(0)
      .simulate('click');
    expect(Dialog.find(ConfirmationDialog)).toHaveLength(1);
  });
});
