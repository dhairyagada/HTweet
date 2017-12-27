import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {DrawerNavigator,StackNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import SearchScreen from './SearchScreen';
import SideBar from './SideBar';

/*
    const ProfileScreen = () => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        </View>
    );

    const ListScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>List Screen</Text>
    </View>
    );
*/
const HomeScreenRouter = DrawerNavigator(
    {
      Home: { screen: MainScreen },
    //  Profile: { screen: ProfileScreen },
    //  Lists: { screen: ListScreen },
      
    },
    {
      contentComponent: props => <SideBar {...props} />
    }
  );
  const StackRouter = StackNavigator({
    HomeStack: {
        screen: HomeScreenRouter,
        // navigationOptions: { title: 'Home Stack' }
    },
    Search: {
        screen: SearchScreen
    }
  },
    {
        headerMode: "none"
    }
  )
  
  // export default HomePageRouter;
  export default StackRouter;
  //export default HomeScreenRouter;