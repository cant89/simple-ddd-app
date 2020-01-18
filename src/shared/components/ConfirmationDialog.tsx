import React, { FunctionComponent } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@material-ui/core';
import LANG from '../languages/en';

type TProps = {
  onConfirm: () => void;
  onAbort: () => void;
};

const ConfirmationDialog: FunctionComponent<TProps> = ({
  onConfirm,
  onAbort
}) => {
  return (
    <Dialog open={true} onClose={onAbort}>
      <DialogTitle>{LANG.DIALOG.CONFIRMATION_TITLE}</DialogTitle>
      <DialogContent>{LANG.DIALOG.CONFIRMATION_DESC}</DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} color="primary" autoFocus={true}>
          {LANG.GENERAL.YES}
        </Button>
        <Button onClick={onAbort} color="secondary">
          {LANG.GENERAL.NO}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
