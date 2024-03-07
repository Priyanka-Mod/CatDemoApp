import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstView from '../component/FirstView';
import CatListScreen from '../views/CatListScreen';
import FetchApiData from '../component/FetchApiData';
import CatListView from '../component/CatListView';
import CatForm from '../component/CatForm';
import ScrollDemo from '../component/ScrollDemo';
import ScrollingDemoScreen from '../views/ScrollingDemoScreen';

const Stack = createNativeStackNavigator();
const CatScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen name="ScrollDemoScreen" component={ScrollingDemoScreen} /> */}
      <Stack.Screen name="CatFeed" component={FirstView} />
      <Stack.Screen name="CatData" component={CatListView} />
      <Stack.Screen name="CatForm" component={CatForm} />
      <Stack.Screen name="PropDemo" component={CatListScreen} />
      <Stack.Screen name="Data" component={FetchApiData} />
    </Stack.Navigator>
  );
};

export default CatScreenNavigation;
