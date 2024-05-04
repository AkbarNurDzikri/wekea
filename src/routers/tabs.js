import CustomSafeArea from "../components/CustomSafeArea";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/Home";
import Cart from "../views/Cart";
import Transaction from "../views/Transaction";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicon from "react-native-vector-icons/Ionicons";

const Tabs = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <CustomSafeArea>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            marginVertical: 15,
            marginHorizontal: 10,
            borderRadius: 20,
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <MaterialIcon
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <MaterialIcon
                name={focused ? "cart" : "cart-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Transaction"
          component={Transaction}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicon
                name={focused ? "receipt" : "receipt-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </CustomSafeArea>
  );
};

export default Tabs;
