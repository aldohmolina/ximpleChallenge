import axios from 'axios';

export const useAxiosAPI = (url?: string) => {
  const API_URL = url ?? 'https://mocki.io/v1';
  const axiosAPI = axios.create({baseURL: API_URL});
  return {
    axiosAPI,
  };
};
