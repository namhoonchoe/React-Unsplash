import axios, { AxiosInstance } from "axios";


const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY  

export const unsplashApi: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: ApiKey,
  },
});