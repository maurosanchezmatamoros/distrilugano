import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, Detail, Home, Logged, Products } from '../screens/index';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Logged" component={Logged} options={{ headerShown: false }} />
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen name="Products" component={Products} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
