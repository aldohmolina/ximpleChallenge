import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigation} from './router/MainStackNavigation';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
