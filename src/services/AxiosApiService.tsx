import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.0.2.2:3000/',
});

const apiService = {
    // Example function to fetch data from an endpoint
    fetchData: async (urlName:string) => {
      try {
        const response = await instance.get(`${urlName}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
    fetchDataById: async (urlName:string , id:string) => {
      try {
        const response = await instance.get(`${urlName}/${id}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },

    postData: async(urlName:string , data:object) =>{
        try {
            const response = await instance.post(urlName, data);
            return response.data;
          } catch (error) {
            console.error('Error posting data:', error);
            throw error;
          }
    },

    updateData: async(urlName:string ,id:string,data:object) =>{
        try {
            const response = await instance.put(`${urlName}/${id}`, data);
            return response.data;
          } catch (error) {
            console.error('Error posting data:', error);
            throw error;
          }
    },

    deleteData: async(urlName:string , id:string) =>{
        try {
            const response = await instance.delete(`${urlName}/${id}`);
            return response.data;
          } catch (error) {
            console.error('Error posting data:', error);
            throw error;
          }
    },


}
export {apiService};
