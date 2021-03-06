import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';
import Customer from './Customer';
import { TCustomer } from '../services';
import { getCustomersListProps } from '../selectors';
import { fetchCustomersRequest as fetchCustomersRequestAction } from '../actions';
import CircularLoader from '#/shared/components/CircularLoader';

export type TCustomerExtended = TCustomer & { budget_left: number };

type TProps = {
  isLoading: boolean;
  customers: TCustomerExtended[];
  fetchCustomersRequest: () => void;
};

const CustomersList: FunctionComponent<TProps> = ({
  customers,
  fetchCustomersRequest
}) => {
  useEffect(() => {
    fetchCustomersRequest();
  }, []);

  if (!customers) {
    return <CircularLoader centered={true} margin="40px" />;
  }

  return (
    <List>
      {Object.values(customers).map(customer => (
        <Customer key={customer.id} customer={customer} />
      ))}
    </List>
  );
};

export default connect(getCustomersListProps, {
  fetchCustomersRequest: fetchCustomersRequestAction
})(CustomersList);
