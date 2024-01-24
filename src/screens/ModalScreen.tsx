import {
  Animated,
  View,
  Pressable,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useCardAnimation} from '@react-navigation/stack';
import {TitleSection} from '../components/TitleSection';
import {ActionButton} from '../components/ActionButton';
import {useEffect} from 'react';
import {setCredits, setSelectedCredit} from '../redux/reducers/creditsReducer';
import {useAppSelector} from '../redux/hooks/useAppSelector';
import {useAppDispatch} from '../redux/hooks/useAppDispatch';
import {CreditButton} from '../components/CreditButton';
import {useFetchCredits} from '../api/useFetchCredits';

function ModalScreen({navigation}: any) {
  const {colors} = useTheme();
  const {current} = useCardAnimation();
  const {credits, selected} = useAppSelector(state => state.planReducer);
  const distpach = useAppDispatch();
  const {isLoading, data, error, fetchCredits} = useFetchCredits();

  useEffect(() => {
    if (!isLoading && Array.isArray(data?.data)) {
      distpach(setCredits(data?.data));
    } else if (error) {
      Alert.alert('Ocurrio un error en el proceso');
      console.error(error);
    }
  }, [isLoading]);

  useEffect(() => {
    fetchCredits();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          padding: 20,
          width: '90%',
          maxWidth: 400,
          borderRadius: 15,
          backgroundColor: colors.card,
          transform: [
            {
              scale: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        {isLoading ? (
          <ActivityIndicator style={{padding: 20}} size="large" />
        ) : (
          <>
            <TitleSection
              title="Felicidades!"
              subtitle="Encontramos estos creditos perfectos para ti:"
            />
            <View style={{marginTop: 10}}>
              {credits.map(credit => (
                <CreditButton
                  key={credit.id.toString()}
                  value={credit.value}
                  name={credit.name}
                  select={credit.id === selected?.id}
                  onPress={() => distpach(setSelectedCredit(credit))}
                />
              ))}
            </View>
            <ActionButton
              title="Seleccionar Crédito"
              onPress={() =>
                selected &&
                navigation.reset({
                  index: 0,
                  routes: [{name: 'ContractScreen'}],
                })
              }
            />
          </>
        )}
      </Animated.View>
    </View>
  );
}
export default ModalScreen;
