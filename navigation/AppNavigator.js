import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
  import SecondPage from '../screens/SecondPage';
  
  const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    SecondPage: { screen: SecondPage},
  });

  export default AppNavigator;




