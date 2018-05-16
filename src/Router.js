import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Albums from './components/Albums';
import Details from './components/Details';
import Me from './components/Me';
import Setting from './components/Setting';

const AlbumStack = StackNavigator({
  Daily: {
    screen: Albums,
  },
  Details: {
    screen: Details,
  },
},
);

const MeStack = StackNavigator({
  Animal: {
    screen: Me,
  }
});

const SettingStack = StackNavigator({
  Favorite: {
    screen: Setting,
  }
});


export const TabRouter = TabNavigator(
  {
    Daily: {
      screen: AlbumStack,
    },
    Animal: {
      screen: MeStack,
    },
    Favorite: {
      screen: SettingStack,
    },
  },
  {
    tabBarPosition:'bottom',
    animationEnabled: true,
    swipeEnabled:true,
    tabBarOptions:{
        activeTintColor:'red',
        inactiveTintColor:'black',
        style:{
          backgroundColor:'#fff',
        },
        labelStyle:{
          fontSize:16,
        },
    },
  }
);


