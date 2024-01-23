import {View} from 'react-native';
import {AuthInput} from '../components/AuthInput';
import {ActionButton} from '../components/ActionButton';
import {ScreenLayout} from '../components/ScreenLayout';
import {useNavigation} from '@react-navigation/native';

export const AuthScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <>
      <ScreenLayout
        title="Descubre tu Credito"
        subtitle="Llena el siguiente formulario para conocer  los créditos que tenemos disponibles para ti">
        <View>
          <AuthInput labelText="Nombre" />
          <AuthInput labelText="Correo" />
          <ActionButton
            title="Descubrir Creditos"
            onPress={() => {
              navigation.navigate('ModalScreen');
            }}
          />
        </View>
      </ScreenLayout>
    </>
  );
};
