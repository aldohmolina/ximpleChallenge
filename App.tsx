import {Text, TextInput, View} from 'react-native';
import {ScreenContainer} from './components/ScreenContainer';
import {AuthInput} from './components/AuthInput';
import {ActionButton} from './components/ActionButton';

const App = () => {
  return (
    <ScreenContainer
      title="Descubre tu Credito"
      subtitle="Llena el siguiente formulario para conocer  los créditos que tenemos disponibles para ti">
      <View>
        <AuthInput labelText="Nombre" />
        <AuthInput labelText="Correo" />
        <ActionButton title="Descubrir Creditos" />
      </View>
    </ScreenContainer>
  );
};

export default App;
