import {
  Animated,
  View,
  Text,
  Pressable,
  Button,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useCardAnimation} from '@react-navigation/stack';
import {TitleSection} from '../components/TitleSection';
import {ActionButton} from '../components/ActionButton';
import {useEffect} from 'react';
import {setCredits} from '../redux/reducers/creditsReducer';
import {useSelector} from 'react-redux';
import {useAppSelector} from '../redux/hooks/useAppSelector';
import {useAppDispatch} from '../redux/hooks/useAppDispatch';

function ModalScreen({navigation}: any) {
  const {colors} = useTheme();
  const {current} = useCardAnimation();
  const {credits, selected} = useAppSelector(state => state.planReducer);
  const distpach = useAppDispatch();

  useEffect(() => {
    distpach(
      setCredits([
        {id: 1, name: 'Credito 1', value: 500},
        {id: 2, name: 'Credito 2', value: 1000},
        {id: 3, name: 'Credito 3', value: 1500},
        {id: 4, name: 'Credito 4', value: 2000},
      ]),
    );
    return () => {};
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
        <TitleSection
          title="Felicidades!"
          subtitle="Encontramos estos creditos perfectos para ti:"
        />
        <Text>{JSON.stringify(credits, null, 2)}</Text>
        <ActionButton title="Seleccionar Crédito" onPress={navigation.goBack} />
        <Button
          title="Okay"
          color={colors.primary}
          style={{alignSelf: 'flex-end'}}
          onPress={navigation.goBack}
        />
      </Animated.View>
    </View>
  );
}
export default ModalScreen;
