import { NavigationContainer } from '@react-navigation/native';

import ShopNavigator from './orders';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
