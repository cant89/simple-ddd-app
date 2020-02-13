import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(({ palette: { secondary } }) => ({
  root: {
    color: secondary.contrastText,
    position: 'relative'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Header = () => {
  const classes = styles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar} />
    </AppBar>
  );
};

export default Header;
