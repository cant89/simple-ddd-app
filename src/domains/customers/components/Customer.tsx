import React, { FunctionComponent, useState, Fragment } from 'react';
import { TCustomer } from '../services';
import {
  Typography,
  Card,
  CardContent,
  CardActionArea
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditCustomerDialog from './EditCustomerDialog';
import LANG from '#/shared/languages/en';

type TProps = {
  customer: TCustomer;
};

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    marginTop: spacing(2)
  }
}));

const Customer: FunctionComponent<TProps> = ({ customer }) => {
  const { name, budget, budget_spent, date_of_first_purchase } = customer;
  const classes = useStyles();
  const [editDialogVisibility, changeEditDialogVisibility] = useState(false);

  const handleCustomerClick = () => changeEditDialogVisibility(true);
  const handleEditCustomerDialogClose = () => changeEditDialogVisibility(false);
  const handleEditCustomerDialogSave = () => changeEditDialogVisibility(false);

  return (
    <Fragment>
      {editDialogVisibility && (
        <EditCustomerDialog
          customer={customer}
          open={editDialogVisibility}
          onClose={handleEditCustomerDialogClose}
          onSaved={handleEditCustomerDialogSave}
        />
      )}
      <Card className={classes.card}>
        <CardActionArea onClick={handleCustomerClick}>
          <CardContent>
            <Typography variant="h4">{name}</Typography>
            <Typography>
              <strong>{LANG.CUSTOMER.BUDGET}:</strong> {budget}
            </Typography>
            <Typography>
              <strong>{LANG.CUSTOMER.BUDGET_SPENT}:</strong> {budget_spent}
            </Typography>
            <Typography>
              <strong>{LANG.CUSTOMER.FIRST_PURCHASE}:</strong>{' '}
              {date_of_first_purchase}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

export default Customer;
