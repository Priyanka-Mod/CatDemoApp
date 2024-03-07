import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Logout"
        onPress={async () => {
          await AsyncStorage.removeItem('user');

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Login'}],
            }),
          );
        }}
      />
    </View>
  );
};

export default Home;
