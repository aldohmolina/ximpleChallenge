import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigation} from './router/MainStackNavigation';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainStackNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
