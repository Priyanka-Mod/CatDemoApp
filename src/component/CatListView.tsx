import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Button, FlatList, ActivityIndicator, Modal, Alert} from 'react-native';
import {NavigationPropType, catItemData} from '../types';
import { deleteFetchApi, getFecthApi } from '../services/FetchApiService';
import { apiService } from '../services/AxiosApiService';
import { useFocusEffect } from '@react-navigation/native';

const CatListView = ({navigation}:NavigationPropType) => {
  const [data, setData] = useState<catItemData[]>([]);
  // const[isModalVisible,setIsModalVisible] = useState(false)
  // const toggleModal = () => {
  //   setIsModalVisible(!isModalVisible)
  // }
  const getData = async () => {
    // Alert.alert('get called')
    const catApiData =await apiService.fetchData('catData');
    console.log(catApiData , "ApiData");
    setData(catApiData);
  };

  useEffect(() => {
    // Alert.alert('get called')
    getData();
  }, []);

  useFocusEffect(React.useCallback(() => {
    getData();
  },[])
);

  const updateData = (id:string) => {
     navigation.navigate('CatForm',{id:`${id}`});
  };
  const deleteData =async (id:string) => {
    const catApiData= await apiService.deleteData('catData',id)
    if(catApiData){
        console.log('cat of id ' + id + " is deleted!")
        getData();
    }
  };

  return (
    <View style={style.container}>
      <View
        style={{flexDirection: 'row'}}>
        <Text style={style.textStyle}>Profile</Text>
        <Text style={style.textStyle}>Name</Text>
        <Text style={style.textStyle}>Age</Text>
        <Text style={style.textStyle}>Action</Text>
      </View>

      {data? (
        <View
          style={{flexDirection: 'row'}}>
          <FlatList
            data={data}
            renderItem={({item}) => {
                console.log(item, "item:")
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{margin: 10}}>
                    <Image
                      style={{padding: 10, margin: 10, alignSelf: 'center'}}
                      source={{
                        uri: item.imagePath,
                        width: 50,
                        height: 50,
                      }}
                    />
                  </View>
                  <Text style={[style.textStyle, {marginLeft: 15}]}>
                    {item.name}
                  </Text>
                  <Text style={[style.textStyle, {marginLeft: 17}]}>
                    {item.age}
                  </Text>
                  <View style={style.buttonStyleContainer}>
                    <Button title="Update" onPress={() => updateData(item.id)} />
                    <Button title="Delete" onPress={()=> deleteData(item.id)} />
                  </View>
                </View>
              );
            }}
          />
        </View>
      ) : (
        <View>
           {/* <ActivityIndicator /> */}

           
           {/* <Button title='Open Modal' onPress={toggleModal}/>
           <Modal animationType='slide' visible={isModalVisible}>
            <View style={{flex:1}}>
            <Text>Oops!! No data found.Fill form to display data.</Text>
            <Button title='Ok' onPress={toggleModal}/>
            </View>
           </Modal> */}


          <Text>No Data found</Text>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
  },
  textStyle: {
    margin: 5,
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  buttonStyleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
});
export default CatListView;
