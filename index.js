import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';

import configureStore from "./src/store/configureStore";

const cstore = configureStore();

const RNRedux = () => (
  <Provider store={cstore}>
      <App />
  </Provider>
);

AppRegistry.registerComponent('rncourse', () => RNRedux);