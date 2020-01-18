import React, { FunctionComponent } from 'react';
import { Box, Container } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router';

import Header from '../Header';

const MainLayout: FunctionComponent<RouteComponentProps> = ({ children }) => (
  <Box m={0} p={0} maxWidth="xl">
    <Header />
    <Container maxWidth="sm">{children}</Container>
  </Box>
);

export default withRouter(MainLayout);
