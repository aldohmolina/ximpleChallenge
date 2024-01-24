import {CreditButton} from '../components/CreditButton';
import {ActionButton} from '../components/ActionButton';
import {ScreenLayout} from '../components/ScreenLayout';
import {useAppSelector} from '../redux/hooks/useAppSelector';

export const ContractScreen = ({navigation}: any) => {
  const {selected} = useAppSelector(state => state.planReducer);
  return (
    <ScreenLayout
      title="Acepta tu credito"
      subtitle="Confirma que has seleccionado el crédito deseado">
      <CreditButton
        name={selected?.name ?? ''}
        value={selected?.value ?? 0}
        select={false}
      />
      <ActionButton
        title="Contratar"
        onPress={() => navigation.navigate('AuthScreen')}
      />
    </ScreenLayout>
  );
};
