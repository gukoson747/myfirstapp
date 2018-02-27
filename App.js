import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

// Import screen page
import HomeScreen from './components/home/homescreen';
import SearchTabNavigator from './components/search/searchTabNavigator';


const App = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  SearchTabNavigator: { screen: SearchTabNavigator }
},{
  initialRouteName: 'SearchTabNavigator'
})

export default App;


