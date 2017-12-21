import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2

import Screen1 from './Components/Screen1';

/*const HomeScreen = () => (
  <Screen1/>
);
*/
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
const MomentScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Moment Screen</Text>
  </View>
);
const HighlightScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Highlight Screen</Text>
  </View>
);

const RootDrawer = DrawerNavigator({
  Home: {
    screen: Screen1,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Listo: {
    screen: ListScreen,
    navigationOptions: {
      drawerLabel: 'List',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-list' : 'ios-list-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  
  Momento: {
    screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: 'List',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-flash' : 'ios-flash-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },

  Highlighto: {
    screen: HighlightScreen,
    navigationOptions: {
      drawerLabel: 'Highlights',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-browsers' : 'ios-browsers-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  
  }
);

export default RootDrawer;