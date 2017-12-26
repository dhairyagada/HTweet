import React, { Component } from "react";
import {View,Text} from'react-native';
import Screen1 from './Screen1';
import SideBar from "./Sidebar";
import { DrawerNavigator,StackNavigator } from "react-navigation";
import SearchScreen from './SearchScreen';
import Timeline from "./Timeline/Timeline";

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
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Screen1 },
    Profile: { screen: ProfileScreen },
    Listo: { screen: ListScreen },
    TimelineScr: { screen: Timeline}
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