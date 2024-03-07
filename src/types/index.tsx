import { NavigationAction } from "@react-navigation/native";

export interface NavigationPropType {
    navigation: {
      navigate: (route: string,params?:object) => void;
      goBack: () => void;
      dispatch: (action: NavigationAction) => void;
    };
    route:{
      params?: object | {id:string} | string;
  };
}

export interface catItemData{
  name: String;
  age: string;
  id: string;
  image?:string;
  imagePath:string
}

export interface ApiData{
  title:string,
  id:number,
  body:string,
  userId:number
}

export interface ResultInterface{
  name:string,
  url:string
}
export interface FectApi{
  count:number,
  next:string | null,
  previous:string|null,
  results:ResultInterface[]
}

export interface CatData{
  id:string,
  name:string,
  age:number,
  image:string
}

export interface UserData{
  name:string,
  email:string,
  date:string,
  number:number,
  password:string
}