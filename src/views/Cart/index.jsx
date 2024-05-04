import CustomSafeArea from "../../components/CustomSafeArea";
import { Button } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import data from "../../utils/dummyDataProducts";
import { useMemo, useState } from "react";
import { View } from "react-native";
import currencyFormatter from "../../utils/currencyFormatter";
import CartItem from "./CartItem";
import { Swipeable } from "react-native-gesture-handler";
import Animated, { SlideOutLeft } from "react-native-reanimated";

const Cart = () => {
  const [cartItems, setCartItems] = useState(data);
  const totalAmount = useMemo(
    () => cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0),
    [cartItems]
  );
  const handleDelete = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <CustomSafeArea>
      <FlatList
        data={cartItems}
        renderItem={(item) => (
          <Animated.View
            exiting={SlideOutLeft.duration(500)}
            style={{
              backgroundColor: "#EBEBEB",
              marginVertical: 5,
              borderRadius: 10,
            }}
          >
            <Swipeable
              renderRightActions={() => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    mode="text"
                    icon="trash-can"
                    textColor="red"
                    onPress={() => handleDelete(item.item.id)}
                  />
                </View>
              )}
            >
              <CartItem
                dataTarget={item}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </Swipeable>
          </Animated.View>
        )}
      />

      <View style={{ justifyContent: "center", bottom: 20 }}>
        <Button
          mode="contained"
          icon="send"
          style={{
            padding: 5,
            borderRadius: 5,
          }}
        >
          Checkout {currencyFormatter(totalAmount)}
        </Button>
      </View>
    </CustomSafeArea>
  );
};

export default Cart;
