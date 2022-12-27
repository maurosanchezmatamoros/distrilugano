import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cart } from '../screens/index';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
