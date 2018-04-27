//import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a conponent
const App = () => (
  <Header />
);

//render it to device
AppRegistry.registerComponent("albums", () => App);
