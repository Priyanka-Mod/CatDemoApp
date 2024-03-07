import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { NavigationPropType, catItemData } from "../types";
import FlatlistView from "../component/FlatlistView";

const CatListScreen = ({navigation}:NavigationPropType) => {
    const CatData: catItemData[] = [
        {
          name: 'Oreo',
          age: '7',
          id: '1',
          image:
            'https://images.ctfassets.net/440y9b545yd9/250mPrOBEUesyo1imn2SmZ/9c6104c32076f06803834df2aafffe77/American-Shorthair850.jpg',
          imagePath:''
          },
        {
          name: 'Millie',
          age: '10',
          id: '2',
          image:
            'https://images.ctfassets.net/440y9b545yd9/113kg6MQgCovok3qzrZsBo/b7ba352d5054774e0ecfcc1833b071a4/Aegean850.jpg',
            imagePath:''
          },
        {
          name: 'Ellie',
          age: '11',
          id: '23',
          image:
            'https://images.ctfassets.net/440y9b545yd9/26Qnv8neYHnoGfBMv4Ac2H/f3cc7b809fe47759c1a4dac285fcf195/Bengal_Cat_Pose850.jpg',
            imagePath:''
          },
        {
          name: 'Bruno',
          age: '13',
          id: '4',
          image:
            'https://images.ctfassets.net/440y9b545yd9/5187hBnPovxaLUBveJ9Jqg/53546c7274710c61e3951206b60e6f6b/Misconception_Black_Cats_850.jpg',
            imagePath:''
          },
        {
          name: 'Leo',
          age: '5',
          id: '5',
          image:
            'https://images.ctfassets.net/440y9b545yd9/3mXEPSN2Ap12wAnFz8dVm2/8b34d9e82f41b11fcee66cc1fc741724/Scottish_fold_5_things_hero850.jpg',
            imagePath:''
          },
        {
          name: 'Bru',
          age: '5',
          id: '6',
          image:
            'https://images.ctfassets.net/440y9b545yd9/4ZP0InpIOw3MPh2NFW9jM4/09f008f8c5608c7587effffbcf03e655/shutterstock_752719666__1_.jpg',
            imagePath:''
          },
    ];
return(
    <View style={{flex:1}}>
    <FlatlistView catData = {CatData}/>
        <Button
          title="Fetch Data"
          onPress={() => navigation.navigate('Data')}
        />
    
  </View>
)
     


}

const style = StyleSheet.create({

})

export default CatListScreen