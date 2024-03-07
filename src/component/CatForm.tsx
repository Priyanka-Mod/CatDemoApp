import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
  Alert,
  TouchableOpacity,
  Image,TextInputProps ,
  KeyboardAvoidingView,
} from 'react-native';
import {NavigationPropType} from '../types';

import {ImageLibraryOptions, ImagePickerResponse, launchCamera, launchImageLibrary, Asset, MediaType} from 'react-native-image-picker';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  getFecthApi,
  getIdFecthApi,
  postFetchApi,
  putFetchApi,
} from '../services/FetchApiService';
import { apiService } from '../services/AxiosApiService';

interface FileAsset {
  uri: string;
  type?: string;
  fileName?: string;
  fileSize?: number;
  width?: number;
  height?: number;
}

const CatForm = ({navigation, route}: NavigationPropType) => {
  const inputFocus = useRef<TextInput>(null);
  let id = (route.params as { id?: string })?.id;
  console.log(id, 'id');
  const [catName, setCatName] = useState('');
  const [catAge, setCatAge] = useState('');
  //   const [catImage, setCatImage] = useState('');
  const [error, setError] = useState(false);
  const [filePath, setFilePath]=  useState<FileAsset | {}>({});

  const chooseFile = (type: string) => {
    let options:ImageLibraryOptions= {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.assets && response.assets.length > 0) {
        console.log('Response = ', response.assets[0].uri);
        setFilePath(response.assets[0]);
      }
    });
  };

  const editableData = async () => {
    const catApiData = await apiService.fetchDataById('catData', id as string);
    console.log(catApiData, 'editabledata');
    setCatName(catApiData.name);
    setCatAge(catApiData.age);
    // setCatImage(catApiData.image);
    setFilePath({uri: catApiData.imagePath});
    console.log(catApiData.imagePath, 'imagePath');
  };

  useEffect(() => {
    if (id) {
      console.log('useEffect called');

      editableData();
    }
  }, [id]);

  const submitData = async () => {
    const result = await apiService.postData('catData', {
      name: catName,
      age: catAge,
      imagePath: (filePath as FileAsset).uri,
    });

    if (!catName || !catAge || !filePath) {
      setError(true);
      return false;
    }
    console.log('test=> ', catName, catAge, (filePath as FileAsset).uri);

    console.log('fETCH');
    console.log('submitData=> ', submitData);
    navigation.navigate('CatFeed');
    setCatAge('');
    setCatName('');
    // setCatImage('');
    setFilePath('');
  };

  const setEditedData = async (id: string) => {
    const submitEditedData = await apiService.updateData('catData', id, {
      name: catName,
      age: catAge,
      imagePath:  (filePath as FileAsset).uri,
    });
    console.log('edited data: ', submitEditedData);

    navigation.navigate('CatData');
    setCatAge('');
    setCatName('');
    // setCatImage('');
    setFilePath('');
  };

  const onSubmit = () => {
    id ? setEditedData(id) : submitData();
  };
  const onCancel = () => {
    setCatAge('');
    setCatName('');
    // setCatImage('');
    setFilePath('');
    inputFocus.current?.focus();
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}
        source={{
          uri: 'https://img.freepik.com/free-vector/cat-lover-pattern-background-design_53876-100662.jpg?size=626&ext=jpg',
        }}
        resizeMode="cover">
        <KeyboardAwareScrollView
          enableAutomaticScroll
          scrollEnabled
          enableOnAndroid={true}>
          <View
            style={{
              marginTop:150,
              width: 300,
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 7,
              backgroundColor: 'white',
              padding: 20,
              shadowColor: 'black',
              shadowOffset: {width: 2, height: 4},
              shadowOpacity: 0.5,
              shadowRadius: 3,
              elevation: 10,
            }}>
              <TextInput
                ref={inputFocus}
                style={style.inputStyle}
                placeholder="Enter Your Cat Name"
                placeholderTextColor={'gray'}
                value={catName}
                onChangeText={name => setCatName(name)}
              />

              <TextInput
                style={style.inputStyle}
                placeholder="Enter Your Cat Age"
                placeholderTextColor={'gray'}
                value={catAge}
                onChangeText={age => setCatAge(age)}
                keyboardType="number-pad"
              />

              {/* <TextInput
              style={style.inputStyle}
              placeholder="Enter Your Cat Image Url"
              placeholderTextColor={'gray'}
              value={catImage}
              onChangeText={image => setCatImage(image)}
            /> */}

              {filePath ? (
                <View>
                  <Image source={{uri:  (filePath as FileAsset).uri, width: 200, height: 200}} />
                </View>
              ) : (
                <View>
                  <Text>No image selected</Text>
                </View>
              )}
              <TouchableOpacity
                activeOpacity={0.5}
                style={style.buttonStyle}
                onPress={() => chooseFile('photo')}>
                <Text style={style.textStyle}>Choose Image</Text>
              </TouchableOpacity>

              {error ? (
                <View>
                  <Text style={style.errorText}>All feilds are required</Text>
                </View>
              ) : null}
              <View style={style.fixToText}>
                <Button color={'orange'} title="Submit" onPress={onSubmit} />
                <Button color={'grey'} title="Cancel" onPress={onCancel} />
              </View>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  errorText: {
    color: 'red',
    padding: 10,
    textAlign: 'center',
  },
  inputStyle: {
    borderBottomWidth: 1,
    padding: 10,
    height: 50,
    color: 'black',
    borderBottomColor: 'gray',
  },
  fixToText: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
});

export default CatForm;
