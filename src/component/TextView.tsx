import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//correct way of declaring type in react native
type textProps = {
  text: string;
};

const name = 'Priyanka';

//also write {text}:{text:string}  for passing text type and call it by {text} simply

const TextView = (props: textProps) => {
  return (
    <View
      style={style.container}
    >
      <Text style={style.text}>{props.text}</Text>

      <Text style={style.heading}>Getting Started With react Native! </Text>

      <Text style={style.subHeading}>My name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container:{
      // flex: 1,
      margin:10
  },
  heading: {
    color: '#3A3B3C',
    fontSize: 45,
  },

  subHeading: {
    color: 'grey',
    fontSize: 30,
    marginVertical: 10,
  },
  text: {
    color: 'coral',
    fontSize: 30,
  },
});
export default TextView;
