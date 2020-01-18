// disable interface naming for global and external resources
/* tslint:disable:interface-name */
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const main = createMuiTheme({
  palette: {
    primary: {
      contrastText: '#ffffff',
      main: '#ff4338'
    },
    secondary: {
      main: '#1f2530',
      contrastText: '#ff4338'
    },
    grey: {
      50: '#F5F6F9',
      100: '#D7D7D7'
    },
    text: {
      primary: '#1f2530'
    }
  },
  typography: {
    fontFamily: 'Helvetica',
    h4: {
      fontFamily: 'TimesNewRoman',
      fontWeight: 400,
      fontSize: '1.4rem'
    }
  },
  overrides: {
    MuiAppBar: {
      root: { backgroundColor: '#fff' }
    },
    MuiInputLabel: {
      root: {
        '&$focused': {
          color: '#1f2530'
        }
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottomColor: '#1f2530'
        }
      }
    }
  }
});

export default main;
