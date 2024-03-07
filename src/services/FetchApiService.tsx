import { ApiData, catItemData } from "../types";
//emulatorUrl = 'http://10.0.2.2:3000'
const url = 'http://192.168.1.174:3000'

const getFecthApi=async(urlName:string):Promise<catItemData | ApiData> =>{
    const getApi = await fetch(`${url}/${urlName}`)
    console.log('get called');
    
    return getApi.json();
}

const getIdFecthApi =async(urlName:string,id:string):Promise<catItemData | ApiData> =>{
    const getApi = await fetch(`${url}/${urlName}/${id}`)
    console.log('get called');
    
    return getApi.json();
}

const postFetchApi =async (urlName : string,bodyData:object):Promise<catItemData | ApiData> => {

    console.log('Post called!!' , urlName ,"bodydata: ", bodyData);
    
    const postApi = await fetch(`${url}/${urlName}`,{
        method:'Post',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(bodyData)
    });
    console.log('Before return');
    
    return postApi.json();
}

const putFetchApi =async(urlName:string,id:string , bodyData:object) :Promise<catItemData | ApiData>=> {
    const putApi = await fetch(`${url}/${urlName}/${id}`,{
        method:'Put',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(bodyData)
    });
    console.log('Before return');
    
    return putApi.json();
}

const deleteFetchApi = async(urlName:string,id:string):Promise<catItemData | ApiData>=>{
    const deleteApi = await fetch(`${url}/${urlName}/${id}`,{
        method:'Delete'
    });
    console.log('Before return del');
    
    return deleteApi.json();
}

export {postFetchApi , getFecthApi,getIdFecthApi ,putFetchApi , deleteFetchApi}
