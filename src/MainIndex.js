import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {DrawerNavigator,StackNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import SearchScreen from './SearchScreen';
import SideBar from './SideBar';


const HomeScreenRouter = DrawerNavigator(
    {
      Home: { screen: MainScreen },
    },
    {
      contentComponent: props => <SideBar {...props} />
    }
  );

const StackRouter = StackNavigator({
    HomeStack: {
        screen: HomeScreenRouter,
    },
    Search: {
        screen: SearchScreen
    }
  },
    {
        headerMode: "none"
    }
  )
  
  
export default StackRouter;
  