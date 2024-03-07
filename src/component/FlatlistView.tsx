import React from 'react';
import {Text, FlatList, StyleSheet, View, Button, Image} from 'react-native';
import {catItemData} from '../types';

const FlatlistView = (props:{catData: catItemData[]}) => {
  
  // const CatData: catItemData[] = [
  //   {
  //     name: 'Oreo',
  //     age: '7',
  //     id: '1',
  //     image:
  //       'https://images.ctfassets.net/440y9b545yd9/250mPrOBEUesyo1imn2SmZ/9c6104c32076f06803834df2aafffe77/American-Shorthair850.jpg',
  //   },
  //   {
  //     name: 'Millie',
  //     age: '10',
  //     id: '2',
  //     image:
  //       'https://images.ctfassets.net/440y9b545yd9/113kg6MQgCovok3qzrZsBo/b7ba352d5054774e0ecfcc1833b071a4/Aegean850.jpg',
  //   },
  //   {
  //     name: 'Ellie',
  //     age: '11',
  //     id: '23',
  //     image:
  //       'https://images.ctfassets.net/440y9b545yd9/26Qnv8neYHnoGfBMv4Ac2H/f3cc7b809fe47759c1a4dac285fcf195/Bengal_Cat_Pose850.jpg',
  //   },
  //   {
  //     name: 'Bruno',
  //     age: '13',
  //     id: '4',
  //     image:
  //       'https://images.ctfassets.net/440y9b545yd9/5187hBnPovxaLUBveJ9Jqg/53546c7274710c61e3951206b60e6f6b/Misconception_Black_Cats_850.jpg',
  //   },
  //   {
  //     name: 'Leo',
  //     age: '5',
  //     id: '5',
  //     image:
  //       'https://images.ctfassets.net/440y9b545yd9/3mXEPSN2Ap12wAnFz8dVm2/8b34d9e82f41b11fcee66cc1fc741724/Scottish_fold_5_things_hero850.jpg',
  //   },
  //   {
  //     name: 'Bru',
  //     age: '5',
  //     id: '6',
  //     image:
  //       'https://images.ctfassets.net/440y9b545yd9/4ZP0InpIOw3MPh2NFW9jM4/09f008f8c5608c7587effffbcf03e655/shutterstock_752719666__1_.jpg',
  //   },
  // ];
console.log(props.catData)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This are list of Cats</Text>
      <FlatList
        style={styles.flatListStyle}
        numColumns={2}
        keyExtractor={itemData => itemData.id}
        data={props.catData}
        renderItem={({item}) => {
          return (
            <View>
              <Image style={{alignSelf:'center'}} source={{uri: item.image, width: 100, height: 100}} />
              <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
              </Text>
              
            </View>
          );
        }}
      />

      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    margin: 10,
  },
  flatListStyle: {
    alignSelf: 'center',
  },
  fixToText: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: '400',
  },
  textStyle: {
    marginHorizontal: 10,
    padding: 5,
    marginVertical: 10,
    width: 150,
    fontSize: 20,
    color: 'black',
    backgroundColor: 'orange',
    fontWeight: 'bold',
  },
});
export default FlatlistView;
