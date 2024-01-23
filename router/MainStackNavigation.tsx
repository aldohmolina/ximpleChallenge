import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen} from '../screens/AuthScreen';
import ModalScreen from '../screens/ModalScreen';
import {TransitionPresets} from '@react-navigation/stack';
import {ContractScreen} from '../screens/ContractScreen';

const Stack = createStackNavigator();

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="AuthScreen">
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{presentation: 'transparentModal', headerShown: false}}
      />
      <Stack.Screen
        name="ContractScreen"
        component={ContractScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
