import CustomSafeArea from "../../components/CustomSafeArea";
import { List, Button } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import data from "../../utils/dummyDataProducts";
import { useMemo, useState } from "react";
import { View } from "react-native";
import LeftContent from "./LeftContent";
import currencyFormatter from "../../utils/currencyFormatter";
import RightContent from "./RightContent";

const Cart = () => {
  const [cartItems, setCartItems] = useState(data);
  const totalAmount = useMemo(
    () => cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0),
    [cartItems]
  );

  const decreaseQty = (itemIndex) => {
    const updatedCartItems = cartItems.map((item, index) => {
      if (index === itemIndex) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const increaseQty = (itemIndex) => {
    const updatedCartItems = cartItems.map((item, index) => {
      if (index === itemIndex) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <CustomSafeArea>
      <FlatList
        data={cartItems}
        renderItem={(item) => (
          <View
            style={{
              backgroundColor: "#EBEBEB",
              marginVertical: 3,
              marginHorizontal: 15,
              borderRadius: 10,
            }}
          >
            <CartItem
              dataTarget={item}
              decreaseQty={decreaseQty}
              increaseQty={increaseQty}
            />
          </View>
        )}
      />

      <View
        style={{ justifyContent: "center", marginHorizontal: 20, bottom: 20 }}
      >
        <Button
          mode="contained"
          icon="send"
          style={{
            padding: 5,
          }}
        >
          Checkout {currencyFormatter(totalAmount)}
        </Button>
      </View>
    </CustomSafeArea>
  );
};

const CartItem = ({ dataTarget, decreaseQty, increaseQty }) => {
  return (
    <List.Item
      left={() => <LeftContent dataTarget={dataTarget} />}
      right={() => (
        <RightContent
          dataTarget={dataTarget}
          decreaseQty={decreaseQty}
          increaseQty={increaseQty}
        />
      )}
      style={{ paddingVertical: 0 }}
    />
  );
};

export default Cart;
