import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigation} from './router/MainStackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
};

export default App;
