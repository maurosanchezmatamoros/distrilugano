import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrdersNavigator from './orders';
import CartNavigator from './cart';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Orders">
      <BottomTab.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          title: 'Shopping',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home-outline" size={24} color={colors.black} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="cart-outline" size={24} color={colors.black} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
