import axios, { AxiosInstance } from "axios";

const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export const unsplashApi: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: ApiKey,
    per_page: 25,
  },
});


export const unsplashFetcher =  async (url: string) => {
  const { data } = await unsplashApi.get(url);
  return data;
};