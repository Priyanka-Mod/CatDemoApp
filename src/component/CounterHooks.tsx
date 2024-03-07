import React , {useState,useMemo, useCallback } from "react";
import { Button, Text , View } from "react-native";

const CounterHooks = () => {
    const [counter,setCounter] = useState(1);

    const counterEvent = useCallback(() => {
        setCounter((prev) => prev+1)
        console.log(counter)
        return counter
    },[counter])

    //this will display layout on callback 
    const layout = useCallback(() => {
        return (<View>
            <Button title="counter inc" onPress={() => {counterEvent()}}/>
        <Text>{counter}</Text>
        <Button title="check callback" onPress={() => {console.log('without callback')}}/>
        </View>)
    },[counter])

    return(
        <View>
            {layout()}
        </View>
    )
}

export default CounterHooks