import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';



export const TabDefault= TabNavigator(
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