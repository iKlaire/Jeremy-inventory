import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11

import HomeScreen from './HomeScreen';
import RegisterItem from './RegisterItem';
import qrScanner from './qrScanner';
import GiveOut from './GiveOut';
import ItemList from './ItemList';
import Success from './Success';

console.disableYellowBox = true;

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Register:{screen: RegisterItem},
  qrScanner:{ screen: qrScanner},
  gO:{ screen: GiveOut },
  ItemList: { screen: ItemList},
  success:{ screen: Success}
},
{ headerMode: 'screen' });

export default SimpleApp;
