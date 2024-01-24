import React, {useState} from 'react';
import {useAxiosAPI} from './useAxios';

export const useFetchCredits = () => {
  const {axiosAPI} = useAxiosAPI();
  const fetchCredits = async () => {
    const uri = '/2156ae74-9927-4f44-8960-dbdbd0d798ac';
    try {
      const response = await axiosAPI.get(uri);
      return response;
    } catch (error) {
      console.error('Error at useFetchCredits.fetchCredits', error);
      throw error;
    }
  };
  return fetchCredits;
};
