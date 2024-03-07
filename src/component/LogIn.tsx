import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useState , useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  Alert,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {NavigationPropType} from '../types';

interface FormError {
  text?: string;
  password?: string;
}

const LogIn = ({navigation}: NavigationPropType) => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormError>({});
  const [isDarkMode, setDarkMode] = useState(false);
  // const navigation = useNavigation<NavigationPropType>();


  const setData = async () => {
    try{
      await AsyncStorage.setItem('User' , text);
    }
    catch(e){
      console.log(e)
    }
  }
  // const getData = async () => {
  //   try{
  //     await AsyncStorage.getItem('User');
  //   }
  //   catch(e){
  //     console.log(e)
      
  //   }
  // }
  const validateForm = () => {
    let errors: FormError = {};

    if (!text) errors.text = 'Username required';
    if (!password) errors.password = 'Password required';

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSumbit = async() => {
    if (validateForm()) {
      console.log('Submitted', text, password);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'AppStack'}],
        }),
      );

      setData();
      setText('');
      setPassword('');
      setErrors({});
    }
  };

  // const onLogIn= () => {
  //   navigation.navigate('ScrollView');
  // }

  return (
    <View style={isDarkMode ? styles.lightBackground : styles.darkBackground}>
      {/* switch to dark mode */}
      <View style={styles.switchContainer}>
        <Text
          style={[
            styles.darkModeText,
            {color: !isDarkMode ? 'white' : 'black'},
          ]}>
          Light mode
        </Text>
        <Switch
          value={isDarkMode}
          trackColor={{false: '#767577', true: 'lightblue'}}
          thumbColor={'#f4f3f4'}
          onValueChange={() => setDarkMode(previousState => !previousState)}
        />
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={[
            {padding: 10, fontSize: 20, textAlign: 'center', fontWeight: '500'},
            {color: !isDarkMode ? 'white' : 'black'},
          ]}>
          Welcome
        </Text>

        {/* username input */}
        <TextInput
          style={[
            styles.inputText,
            {color: !isDarkMode ? 'white' : 'black'},
            {borderBottomColor: !isDarkMode ? 'white' : 'black'},
          ]}
          editable
          // inputMode='text'
          placeholderTextColor={!isDarkMode ? 'white' : 'black'}
          placeholder="Enter your name"
          onChangeText={newText => setText(newText)}
          value={text}
          //   multiline
          // keyboardType='number-pad
          autoCapitalize="words"
        />
        {errors.text ? (
          <Text style={{color: 'red', margin: 10}}>{errors.text}</Text>
        ) : null}

        {/* password input */}

        <TextInput
          style={[
            styles.inputText,
            {color: !isDarkMode ? 'white' : 'black'},
            {borderBottomColor: !isDarkMode ? 'white' : 'black'},
          ]}
          placeholder="Enter Password"
          placeholderTextColor={!isDarkMode ? 'white' : 'black'}
          secureTextEntry
          onChangeText={newPassword => setPassword(newPassword)}
          value={password}
        />
        {errors.password ? (
          <Text style={{color: 'red', margin: 10}}>{errors.password}</Text>
        ) : null}

        <View style={styles.fixToText}>
          <Button
            color={'orange'}
            title="LogIn"
            onPress={handleSumbit}
          />
          {/* <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        /> */}
        </View>
        <View style={styles.fixToText}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.text}>Resgister Yourself</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#4169E1',
  },
  darkModeText: {
    fontSize: 30,
    marginRight: 20,
  },
  darkBackground: {
    flex: 1,
    backgroundColor: 'black',
  },
  fixToText: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputText: {
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
  },
  lightBackground: {
    flex: 1,
  },
  text: {color: 'white', fontWeight: '400'},
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});

export default LogIn;
