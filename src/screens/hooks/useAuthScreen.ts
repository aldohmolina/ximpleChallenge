import {useEffect, useState} from 'react';
import {useFetchCredits} from '../../api/useFetchCredits';
import {setCredits} from '../../redux/reducers/creditsReducer';
import {useAppDispatch} from '../../redux/hooks/useAppDispatch';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const useAuthScreen = () => {
  useEffect(() => {
    setName(undefined);
    setEmail(undefined);
  }, []);
  const navigation = useNavigation<any>();
  const distpach = useAppDispatch();
  const fetchCredits = useFetchCredits();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email: string) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  const isActiveToSubmit = (): boolean =>
    !!name && !!email && isValidEmail(email);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await fetchCredits();
      if (response.data?.data && Array.isArray(response.data?.data)) {
        distpach(setCredits(response.data.data));
        navigation.navigate('ModalScreen');
      }
    } catch (error) {
      console.error('Error at useAuthScreen.onSubmit', error);
      Alert.alert('Ocurrio un error!');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    setName,
    setEmail,
    isActiveToSubmit,
    onSubmit,
    isLoading,
  };
};
