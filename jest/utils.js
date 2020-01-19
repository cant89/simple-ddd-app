import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

const defaultStore = { customers: {} };
const mockedStore = configureStore()(defaultStore);
export const mountWithProvider = children => (store = mockedStore) =>
  mount(<Provider store={store}>{children}</Provider>);
