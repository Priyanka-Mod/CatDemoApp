import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { NavigationPropType } from '../types';

const FirstView = ({navigation}: NavigationPropType) => {
  const [isHungry, setIsHungry] = useState(true);
  const [catHungry, setFull] = useState(
    'https://reactnative.dev/docs/assets/p_cat1.png',
  );

  

  return (
    <View style={styles.container}>
      
      <Text style={styles.subHeading}>
        {isHungry ? 'Click on image to feed me!' : 'Thank you for feeding me!'}{' '}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setIsHungry(false);
          setFull('https://media.tenor.com/NI10ReGlK9gAAAAM/cat-happy.gif');

          //this will use to set it to the initial value
          setTimeout(() => {
            setIsHungry(true);
            setFull('https://reactnative.dev/docs/assets/p_cat1.png');
          }, 3000);
        }}>
        <Image
          source={{
            uri: catHungry,
            width: 200,
            height: 200,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.subHeading}>
        I am {isHungry ? 'Hungry!!!' : 'Full...'}
      </Text>

      <View style={styles.fixToText}>
        <Button 
          title="Cat Lists"
          onPress={() => navigation.navigate('CatData')}
        />
        <Button
          title="Fill Form"
          onPress={() => navigation.navigate('CatForm')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixToText: {
    height:100,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  subHeading: {
    color: 'black',
    fontSize: 30,
    marginVertical: 10,
  },
});
export default FirstView;
