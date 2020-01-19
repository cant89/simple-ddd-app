import React, { FunctionComponent, useState, useEffect } from 'react';
import { TCustomer } from '../services';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ConfirmationDialog from '#/shared/components/ConfirmationDialog';
import {
  updateCustomerRequest as updateCustomerRequestAction,
  updateCustomerReset as updateCustomerResetAction
} from '../actions';
import { getEditCustomerProps } from '../selectors';
import { connect } from 'react-redux';
import CircularLoader from '#/shared/components/CircularLoader';
import { TEditCustomer } from '../reducers';
import LANG from '#/shared/languages/en';

const FIELDS = {
  BUDGET: 'budget'
};
const FIELDS_VALIDATORS = {
  [FIELDS.BUDGET]: (value: number, customer: TCustomer) =>
    value >= customer.budget_spent
};

const mapDispatchToProps = {
  updateCustomerRequest: updateCustomerRequestAction,
  updateCustomerReset: updateCustomerResetAction
};

type TProps = typeof mapDispatchToProps & {
  open: boolean;
  customer: TCustomer;
  onClose: () => void;
  onSaved: () => void;
  editCustomer: TEditCustomer;
};

const useStyles = makeStyles(() => ({
  paper: {
    minWidth: '400px'
  }
}));

type TFieldsErrors = {
  [key: string]: boolean;
};

type TFieldsValues = {
  [key: string]: number;
};

const EditCustomerDialog: FunctionComponent<TProps> = ({
  open,
  customer,
  onClose,
  onSaved,
  updateCustomerRequest,
  updateCustomerReset,
  editCustomer = {}
}) => {
  const classes = useStyles();
  const [opened, setOpened] = useState(open);
  const [hasToBeConfirm, setHasToBeConfirm] = useState(false);
  const [fieldsErrors, updateFieldsErrors] = useState<TFieldsErrors>({});
  const [fieldsValues, updateFieldsValues] = useState<TFieldsValues>({});

  useEffect(() => {
    setOpened(open);
  }, [open]);

  useEffect(() => {
    if (editCustomer.succeeded) {
      setHasToBeConfirm(false);
      updateCustomerReset();
      onSaved();
    }
  }, [editCustomer.succeeded]);

  const handleClose = () => {
    setHasToBeConfirm(false);
    setOpened(false);
    onClose();
  };

  const handleSave = () => {
    updateCustomerRequest({
      id: customer.id,
      ...fieldsValues
    });
  };

  const handleConfirm = () => {
    setHasToBeConfirm(true);
  };

  const handleInputChange = ({
    currentTarget: { id, value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    updateFieldsErrors({
      [id]: !FIELDS_VALIDATORS[id](parseFloat(value), customer)
    });

    updateFieldsValues({
      [id]: parseFloat(value)
    });
  };

  const hasErrors = () => Object.values(fieldsErrors).includes(true);

  if (editCustomer.isLoading) {
    return (
      <Dialog open={true}>
        <CircularLoader margin="40px" centered={true} />
      </Dialog>
    );
  }

  if (hasToBeConfirm) {
    return <ConfirmationDialog onConfirm={handleSave} onAbort={handleClose} />;
  }

  return (
    <Dialog
      open={opened}
      onClose={handleClose}
      classes={{ paperScrollPaper: classes.paper }}
    >
      <DialogTitle>{customer.name}</DialogTitle>
      <DialogContent>
        <TextField
          type="number"
          error={Boolean(fieldsErrors[FIELDS.BUDGET])}
          id={FIELDS.BUDGET}
          label={LANG.CUSTOMER.EDIT_BUDGET}
          defaultValue={customer.budget}
          margin="normal"
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          disabled={hasErrors()}
          onClick={handleConfirm}
          color="primary"
          autoFocus={true}
        >
          {LANG.GENERAL.SAVE}
        </Button>
        <Button onClick={handleClose} color="secondary">
          {LANG.GENERAL.CANCEL}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(
  getEditCustomerProps,
  mapDispatchToProps
)(EditCustomerDialog);
