import {View} from 'react-native';
import {AuthInput} from '../components/AuthInput';
import {ActionButton} from '../components/ActionButton';
import {ScreenLayout} from '../components/ScreenLayout';
import {useAuthScreen} from './hooks/useAuthScreen';

export const AuthScreen = () => {
  const {setName, setEmail, isActiveToSubmit, onSubmit, isLoading} =
    useAuthScreen();
  return (
    <>
      <ScreenLayout
        title="Descubre tu Credito"
        subtitle="Llena el siguiente formulario para conocer  los créditos que tenemos disponibles para ti">
        <View>
          <AuthInput labelText="Nombre" onChangeText={setName} />
          <AuthInput labelText="Correo" onChangeText={setEmail} />
          <ActionButton
            disabled={!isActiveToSubmit()}
            title="Descubrir Creditos"
            active={isActiveToSubmit()}
            isLoading={isLoading}
            onPress={() => isActiveToSubmit() && onSubmit()}
          />
        </View>
      </ScreenLayout>
    </>
  );
};
