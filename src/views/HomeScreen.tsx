import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet, Button, Text, Alert, TouchableOpacity} from 'react-native';
import TextView from '../component/TextView';
import {NavigationPropType} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

const HomeScreen = ({navigation}: NavigationPropType) => {
  const [user, setUser] = useState('');
  const [effect , setEffect] = useState(1)
  
  const counter = () => {
    setEffect((prev)=> prev+1)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        {/* <Text style={{color: 'white'}}>Welcome {user} </Text> */}
        <TextView text="Text passed from parent to child for display" />
      </View>
      <View style={styles.fixToText}>
        <Button
          title="Feed Your Cat"
          onPress={() => navigation.navigate('CatFeed')}
        />
        <Button
        title="Logout"
        onPress={async () => {
          await AsyncStorage.removeItem('user');

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'AuthStack'}],
            }),
          );
        }}
      />
      </View>
      <View>
        <TouchableOpacity
        onPress={()=>{counter()}}><Text style={{color:'white'}}>Increase</Text></TouchableOpacity>
        <Text style={{color: 'white'}}>{effect}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    // backgroundColor:'green',
    // marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default HomeScreen;
