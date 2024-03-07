import React from 'react';
import {Text, ScrollView, View, RefreshControl} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScrollDemo = () => {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  return (


    // <SafeAreaView style={{ flex: 1,}}>
    //   <ScrollView
    //     contentContainerStyle={{flex: 1,
    //       backgroundColor: 'pink',
    //       alignItems: 'center',
    //       justifyContent: 'center',}}
    //     refreshControl={
    //       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //     }>
    //     <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //        minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    //        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //        minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    //        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //        minim veniam, quis nostrud exercitation ullamco laboris nisi ut </Text>
    //   </ScrollView>
    // </SafeAreaView>

    <View >
      <ScrollView style={{
    backgroundColor: 'pink',
    marginHorizontal: 10,
}}  refreshControl={
  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
}>
        <Text style={{ fontSize: 42,}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        </Text>
      </ScrollView>
    </View>
  );

};

export default ScrollDemo;
