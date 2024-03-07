/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View ,Text, StatusBar} from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-ionicons'

import FirstView from './src/component/FirstView';
import FlatlistView from './src/component/FlatlistView';
import SecondView from './src/component/LogIn';
import HomeScreen from './src/views/HomeScreen';
import ScrollDemo from './src/component/ScrollDemo';
import LogIn from './src/component/LogIn';
import ScrollingDemScreen from './src/views/ScrollingDemoScreen';
import Registration from './src/component/Registration';
import CatListScreen from './src/views/CatListScreen';
import CounterHooks from './src/component/CounterHooks';
import FetchApiData from './src/component/FetchApiData';
import AuthNavigation from './src/navigation/AuthNavigation';
import CatScreenNavigation from './src/navigation/CatScreenNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthScreen from './src/views/AuthScreen';
import AppNavigation from './src/navigation/AppNavigation';


const HomePage = 'Home'
const ListPage = 'List'

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialTopTabNavigator();
  // const Drawer = createDrawerNavigator();
  return (
    
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>

      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Auth">
    
    <Stack.Screen name="Auth" component={AuthScreen}/>
    <Stack.Screen name='AuthStack' component={AuthNavigation}/>
    <Stack.Screen name='AppStack' component={AppNavigation}/>
    
  </Stack.Navigator>
      {/* <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="LogIn">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CatFeed" component={FirstView} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="ScrollDemo" component={ScrollingDemScreen} />
        <Stack.Screen  name="Register" component={Registration} />
        <Stack.Screen  name="PropDemo" component={CatListScreen} />
        <Stack.Screen  name="Hooks" component={CounterHooks} />
        <Stack.Screen  name="Data" component={FetchApiData} />


      </Stack.Navigator> */}


      {/* <Drawer.Navigator>
        <Drawer.Screen name="CatData" component={CatListScreen}/>
      </Drawer.Navigator> */}



       {/* <Tab.Navigator 
        // screenOptions={({route}) => ({
        //   tabBarIcon:({focused,color,size}) => {
        //     let iconName;
        //     let routeName = route.name;

        //     routeName === Home ? iconName ='home-outlline'
        //     :iconName = 'list-outlline'
            
        //     return <Icon name={iconName} size={10}/>
        //   }
        // })}
      >
        <Tab.Screen name={HomePage} component={AuthNavigation}/>
        <Tab.Screen name={ListPage} component={CatScreenNavigation}/>
        <Tab.Screen name='ScrollDemo' component={ScrollingDemScreen}/>
      </Tab.Navigator> */}
      </SafeAreaView>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({});

export default App;
