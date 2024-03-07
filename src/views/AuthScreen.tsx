import React, { useCallback, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { NavigationPropType } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CommonActions} from '@react-navigation/native';

const AuthScreen = ({navigation}:NavigationPropType) => {
    const init = useCallback(async () => {
    const user = await AsyncStorage.getItem('user');
    console.log('user=> ', user);
    if (!user) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'AuthStack'}],
        }),
      );
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'AppStack'}],
        }),
      );
    }
  }, []);
  useEffect(() => {
    init();
  }, [init]);
    return(
        <ActivityIndicator/>
    )
}

export default AuthScreen