import React from 'react';
// import 'react-native-gesture-handler';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CatScreenNavigation from './CatScreenNavigation';
import ScrollingDemoScreen from '../views/ScrollingDemoScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import CatListScreen from '../views/CatListScreen';
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const AppNavigation = () => {

  

    return(
    

            <Tab.Navigator 
        // screenOptions={({route}) => ({
        //   tabBarIcon:({focused,color,size}) => 
        //     let iconName;
        //     let routeName = route.name;

        //     routeName === Home ? iconName ='home-outlline'
        //     :iconName = 'list-outlline'
            
        //     return <Icon name={iconName} size={10}/>
        //   }
        // })}
        initialRouteName='Home'
      >

        {/* <Drawer.Navigator>
        <Drawer.Screen name="CatData" component={CatListScreen}/>
      </Drawer.Navigator> */}

        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='List' component={CatScreenNavigation}/>
        <Tab.Screen name='ScrollDemo' component={ScrollingDemoScreen}/>
      </Tab.Navigator>

    )
}

export default AppNavigation