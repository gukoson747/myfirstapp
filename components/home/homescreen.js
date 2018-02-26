import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Button } from 'native-base';

var backgroundImage = require('../../assets/homepage-bg.jpg');

class HomeScreen extends Component{
    static navigationOptions = {
        header: null
    }
                               
    render(){

        return(
            <View style={style.homeScreenVeiw}>
                <View style={{position: 'absolute',top: 0, height: '100%', width: '100%'}} >
                    <Image source={backgroundImage} style={{flex: 1, height: null, width: null}} />
                </View>
                <Button 
                    block={ true }
                    onPress = {() => this.props.navigation.navigate('SeacrchTabNavigator')}
                >
                    <Text style={{color: 'white'}}> Search Beers</Text>
                </Button>
            </View>
        );
    }
}

const style = StyleSheet.create({
    homeScreenVeiw: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})

export default HomeScreen;