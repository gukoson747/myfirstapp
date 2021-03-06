import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

import { TabNavigator } from 'react-navigation';
import SearchTab from './tabNavigator/searchTab';
import FavoritesTab from './tabNavigator/favoritesTab';


const SearchTabNavigator = TabNavigator({
    SearchTab: { screen: SearchTab },
    FavoritesTab: { screen: FavoritesTab }
},{
    tabBarPosition: 'bottom',
    tabBarComponent: props =>{
        return(
            <Footer>
                <FooterTab>
                    <Button 
                        vertical
                        active = { props.navigationState.index === 0 }
                        onPress = {() => props.navigation.navigate('SearchTab')}
                    >
                        <Icon name="beer" />
                        <Text> Search </Text>
                    </Button>

                    <Button 
                        vertical
                        active = { props.navigationState.index === 1 }
                        onPress = {() => props.navigation.navigate('FavoritesTab')}
                    >
                        <Icon name="star" />
                        <Text> Favorites </Text>
                    </Button>
                </FooterTab>
            </Footer>
        ) 
    }
})

export default SearchTabNavigator;