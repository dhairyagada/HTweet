import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Search_Component extends Component{
    render(){
        return(
          <View>
            <Text>Search BAr</Text>
            </View>
        
        );
    }
}

AppRegistry.registerComponent('Search_Component', () => Search_Component);