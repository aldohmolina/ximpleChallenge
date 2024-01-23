import {CreditButton} from '../components/CreditButton';
import {ActionButton} from '../components/ActionButton';
import {ScreenLayout} from '../components/ScreenLayout';

export const ContractScreen = ({navigation}: any) => {
  return (
    <ScreenLayout
      title="Acepta tu credito"
      subtitle="Confirma que has seleccionado el crédito deseado">
      <CreditButton name="Credito 1" value={500} select={false} />
      <ActionButton
        title="Contratar"
        onPress={() => navigation.navigate('AuthScreen')}
      />
    </ScreenLayout>
  );
};
