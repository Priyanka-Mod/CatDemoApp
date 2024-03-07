import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {catItemData} from '../types';

const Child = (props: {catData: catItemData[]}) => {
  console.log(props);
  return (
    <View>
      <FlatList
        keyExtractor={itemData => itemData.id}
        data={props.catData}
        renderItem={({item}: {item: catItemData}) => {
          return (
            <View>
              <Image source={{uri: item.image, width: 100, height: 100}} />
              <Text> {item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Child;
