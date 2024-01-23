import {useEffect, useState} from 'react';

export const useAuthScreen = () => {
  useEffect(() => {
    setName(undefined);
    setEmail(undefined);
  }, []);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const isValidEmail = (email: string) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const isActiveToSubmit = (): boolean =>
    !!name && !!email && isValidEmail(email);
  return {
    setName,
    setEmail,
    isActiveToSubmit,
  };
};
