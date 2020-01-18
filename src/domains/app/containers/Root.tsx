import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router';
import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import Types from 'SharedTypes';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';

import { ROUTES } from '#/shared/constants';
import Home from '#/pages/Home';
import main from '../themes/main';
import CommonRoute from '../components/Route/CommonRoute';

type TRootProps = {
  store: Types.TReduxStore;
  history: Types.THistory;
};

const Root: FunctionComponent<TRootProps> = props => {
  const { store, history } = props;

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={main}>
          <CssBaseLine />
          <Switch>
            <CommonRoute exact={true} path={ROUTES.MAIN} page={Home} />
            <CommonRoute path="*" page={Home} />
          </Switch>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;
