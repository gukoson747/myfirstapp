import React, { Component } from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';

import { Container, Content } from 'native-base';
import SearchHeader from '../searchHeader';
import axios from 'axios';

class SearchTab extends Component{
    static navigationOptions = {
        header: null
    }

    state = {
        searchBeer: '',
        beerData: {}
    }
    beerSearch = () => {
        Keyboard.dismiss()
        const beerName = this.state.searchBeer.toLowerCase;
        const query = 'http://api.brewerydb.com/v2/search?q='+ beerName +'&type=beer&key=44b0d9b4c888ca132b3e4759c66e746a'
        axios.get(query)
            .then( (response) => {
                console.log(response);
            } )
            
    }
    render(){ 
        return(
            <Container>
                <SearchHeader 
                    value={this.state.searchBeer}
                    onChangeText={ (searchBeer) => this.setState({ searchBeer })}
                    beerSearch={this.beerSearch}
                />
                <Content>
                    
                </Content>
            </Container>
        );
    }
}

export default SearchTab;