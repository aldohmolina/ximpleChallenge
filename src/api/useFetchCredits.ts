import React, {useState} from 'react';
import {useAxiosAPI} from './useAxios';

export const useFetchCredits = () => {
  const {axiosAPI} = useAxiosAPI();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();
  const [data, setData] = useState<any>();
  const fetchCredits = async () => {
    const uri = '/2156ae74-9927-4f44-8960-dbdbd0d798ac';
    setIsLoading(true);
    try {
      const response = await axiosAPI.get(uri);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    error,
    data,
    fetchCredits,
  };
};
