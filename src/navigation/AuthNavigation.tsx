import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import Registration from '../component/Registration';
import LogIn from '../component/LogIn';
import AuthScreen from '../views/AuthScreen';


const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='LogIn' screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen  name="Register" component={Registration} />



    </Stack.Navigator>
  );
};

export default AuthNavigation;
