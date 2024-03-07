import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {NavigationPropType} from '../types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import PhoneNumber from 'libphonenumber-js';
import { getFecthApi, postFetchApi } from '../services/FetchApiService';
import { apiService } from '../services/AxiosApiService';


const Registration = ({navigation}: NavigationPropType) => {


  const submitData = async() => {

    const emailValidation = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    const passwordValidation = new RegExp("^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$")
    
    if(!userData.name ||!userData.email||!userData.number||!userData.date||!userData.password) {
      setError('All fields are required except selecting pet')
      return false;
    }

    if(!emailValidation.test(userData.email)){
      setError('Enter valid email')
      return false;

    }
    const checkNumber = PhoneNumber(userData.number,'IN')
    console.log(checkNumber?.isValid);
    
      if(!checkNumber?.isValid()){
        setError('Enter valid number')
        return false;
      }
    if(!passwordValidation.test(userData.password)){
      setError('Enter strong password')
      return false;
    }
    
    let getApiData =await apiService.fetchData('userData')

    console.log("data:  ",getApiData);
    for(let data of getApiData){
      if(data.email === userData.email){
        setError('Email already registered!')
        return false;
      }
      if(data.number === userData.number){
        setError('Number already registered!')
        return false;
      }
    }
  

    
     const userApiData =  await apiService.postData('userData',{
          name:userData.name,
          email:userData.email,
          date:userData.date,
          number:userData.number,
          password:userData.password
      })
      console.log("user data: " , userApiData);
    
    
    
    navigation.navigate('LogIn')
    
  }

  const [error,setError] = useState('')
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    number:'',
    date: new Date(),
    password: '',
  });
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [number, setNumber] = useState('');

  const [isDarkMode, setDarkMode] = useState(false);
  const [selectDate, setSelectDate] = useState(false);
  const [checkBoxValue, setCheckBoxValue] = useState({cat: false, dog: false});
  const changeUserData = (key: string, value: string) => {
    setUserData(prev => ({...prev, [key]: value}));
  };
  return (
    <View style={isDarkMode ? styles.lightBackground : styles.darkBackground}>
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

      <KeyboardAwareScrollView
        enableAutomaticScroll
        scrollEnabled
        enableOnAndroid={true}>
        <View>
          <TextInput
            style={[
              styles.inputText,
              {color: !isDarkMode ? 'white' : 'black'},
              {borderBottomColor: !isDarkMode ? 'white' : 'black'},
            ]}
            placeholderTextColor={!isDarkMode ? 'white' : 'black'}
            placeholder="Enter your name"
            onChangeText={newText => changeUserData('name', newText)}
            // onChangeText={newText => setUserData(prev => ({...prev, name: newText}))}
            value={userData.name}
          />
          <TextInput
            style={[
              styles.inputText,
              {color: !isDarkMode ? 'white' : 'black'},
              {borderBottomColor: !isDarkMode ? 'white' : 'black'},
            ]}
            placeholderTextColor={!isDarkMode ? 'white' : 'black'}
            placeholder="Enter your email"
            onChangeText={newEmail => changeUserData('email', newEmail)}
            value={userData.email}
          />
          <TextInput
            style={[
              styles.inputText,
              {color: !isDarkMode ? 'white' : 'black'},
              {borderBottomColor: !isDarkMode ? 'white' : 'black'},
            ]}
            keyboardType='number-pad'
            placeholderTextColor={!isDarkMode ? 'white' : 'black'}
            placeholder="Enter your number"
            onChangeText={newNumber => changeUserData('number', newNumber)}
            value={userData.number}
          />

          <TouchableOpacity
            onPress={() => setSelectDate(true)}
            style={{padding: 10}}>
            <Text
              style={{color: !isDarkMode ? 'white' : 'black', marginRight: 5}}>
              {/* to display date we need to format it like this */}
              Select Birth Date: {new Date(userData.date).toDateString()}
            </Text>
          </TouchableOpacity>
          {selectDate && (
            <RNDateTimePicker
              value={new Date(userData.date)}
              mode="date"
              onChange={date => {
                let birthDate = new Date(date.nativeEvent.timestamp); //to set we need to do like this for updating the date
                changeUserData('date', birthDate.toDateString());
                // setDate(new Date(date.nativeEvent.timestamp)), //to set we need to do like this for updating the date
                setSelectDate(false);
              }}
            />
          )}

          <View style={{padding: 10}}>
            <Text style={{color: !isDarkMode ? 'white' : 'black'}}>
              Select Your Pet Catagory:
            </Text>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <TouchableOpacity
              onPress={() =>
                setCheckBoxValue(prev => ({...prev, cat: !checkBoxValue.cat}))
              }
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={checkBoxValue.cat}
                tintColors={{
                  true: !isDarkMode ? 'white' : 'black',
                  false: !isDarkMode ? 'white' : 'black',
                }}
                onValueChange={newValue =>
                  setCheckBoxValue(prev => ({...prev, cat: newValue}))
                }
              />
              <Text
                style={{
                  color: !isDarkMode ? 'white' : 'black',
                  marginRight: 5,
                }}>
                Cat
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                setCheckBoxValue(prev => ({...prev, dog: !checkBoxValue.dog}))
              }
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={checkBoxValue.dog}
                tintColors={{
                  true: !isDarkMode ? 'white' : 'black',
                  false: !isDarkMode ? 'white' : 'black',
                }}
                onValueChange={newValue =>
                  setCheckBoxValue(prev => ({...prev, dog: newValue}))
                }
              />
              <Text
                style={{
                  color: !isDarkMode ? 'white' : 'black',
                  marginRight: 5,
                }}>
                Dog
              </Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={[
              styles.inputText,
              {color: !isDarkMode ? 'white' : 'black'},
              {borderBottomColor: !isDarkMode ? 'white' : 'black'},
            ]}
            placeholder="Enter Password"
            placeholderTextColor={!isDarkMode ? 'white' : 'black'}
            secureTextEntry
            onChangeText={newPassword =>
              changeUserData('password', newPassword)
            }
            value={userData.password}
          />
          {error? <View>
            <Text style = {{color: 'red',margin:20, marginBottom:0 , textAlign:'center'}}>{error}</Text>
          </View>:null}
          <Pressable
            style={{
              flexDirection: 'row',
              marginTop: 20,
              borderRadius: 5,
              padding: 10,
              alignSelf: 'center',
              backgroundColor: 'orange',
            }}
            onPress={() => {
              submitData();
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  darkModeText: {
    fontSize: 30,
    marginRight: 20,
  },
  darkBackground: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputText: {
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
  },
  lightBackground: {
    flex: 1,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});

export default Registration;
