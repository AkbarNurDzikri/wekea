import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/Home";
import Cart from "../views/Cart";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Tabs = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          marginBottom: 25,
          marginHorizontal: 20,
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
    </Tabs.Navigator>
  );
};

export default Tabs;
