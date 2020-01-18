import React, { FunctionComponent, ComponentType } from 'react';

import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

interface IProps extends RouteProps {
  page: ComponentType<any>;
}

const CommonRoute: FunctionComponent<IProps> = props => {
  const { page: RComponent, ...rest } = props;

  const renderLayout: FunctionComponent<RouteComponentProps> = matchProps => (
    <MainLayout>
      <RComponent {...matchProps} />
    </MainLayout>
  );

  return <Route {...rest} render={renderLayout} />;
};

export default CommonRoute;
