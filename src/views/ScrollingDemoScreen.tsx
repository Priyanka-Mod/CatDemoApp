import React from 'react'
import {ScrollView, Text , View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Screen } from 'react-native-screens'
import ScrollDemo from '../component/ScrollDemo'
import SectionListDemo from '../component/SectionListDemo'

const ScrollingDemoScreen = () => {
    return(
        <View style = {{flex:1}}>

            {/* <ScrollDemo/> */}
            <SectionListDemo/>
        </View>
    )
}

export default ScrollingDemoScreen