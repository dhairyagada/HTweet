import React, { Component } from "react";
import {View,Text} from'react-native';
import Screen1 from './Screen1';
import SideBar from "./Sidebar";
import { DrawerNavigator } from "react-navigation";

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
    Listo: { screen: ListScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;