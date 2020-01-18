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
      <Toolbar className={classes.toolbar}>
        <img
          width="35"
          src="https://www.billie.io/images/logo/billie_logo_large.svg"
          alt="billie on mars"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
