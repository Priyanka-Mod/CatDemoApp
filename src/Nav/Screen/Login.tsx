import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={async () => {
          await AsyncStorage.setItem('user', 'abc');

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Home'}],
            }),
          );
        }}
      />
    </View>
  );
};

export default Login;
