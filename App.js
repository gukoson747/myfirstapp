import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

// Import screen page
import HomeScreen from './components/home/homescreen';
import SeacrchTabNavigator from './components/search/seacrchTabNavigator';


const App = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  SeacrchTabNavigator: { screen: SeacrchTabNavigator }
})


export default App;


