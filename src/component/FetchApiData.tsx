import React, { useEffect, useState } from "react";
import { FlatList, FlatListComponent, Image, Text, View } from "react-native";
import { FectApi } from "../types";

interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}

const FetchApiData = () => {
    const [data,setData]=useState<{ name: string; url: string; }[]>([]);


    const Data =async()=> {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
        
            const apiData: PokemonList = await response.json();
            setData(apiData.results);
            console.log(apiData.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
        Data();
    },[])

    return(
        <View>
            {data? <View>
                <FlatList 
                    data={data}
                    renderItem={({item ,index}) => {
                        return(
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:30}}>{index}. {item.name}</Text>
                            </View>
                        )
                    }
                    
                }
                />
            </View>: <Text>No data found</Text>}
            <Text>Hello</Text>
        </View>
    )
    

}

export default FetchApiData