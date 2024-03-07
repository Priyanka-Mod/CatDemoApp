import {View, Text, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

const Auth = ({navigation}:any) => {
  const init = useCallback(async () => {
    const user = await AsyncStorage.getItem('user');
    console.log('user=> ', user);
    if (!user) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      );
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default Auth;
