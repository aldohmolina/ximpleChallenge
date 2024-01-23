import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen} from '../screens/AuthScreen';
import ModalScreen from '../screens/ModalScreen';
import {TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{presentation: 'transparentModal', headerShown: false}}
      />
    </Stack.Navigator>
  );
};
