import CustomSafeArea from "../../components/CustomSafeArea";
import { Button } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import data from "../../utils/dummyDataProducts";
import { useMemo, useState } from "react";
import { View } from "react-native";
import currencyFormatter from "../../utils/currencyFormatter";
import CartItem from "./CartItem";
import { Swipeable } from "react-native-gesture-handler";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Cart = () => {
  const [cartItems, setCartItems] = useState(data);
  const totalAmount = useMemo(
    () => cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0),
    [cartItems]
  );

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
            <Swipeable
              renderRightActions={() => (
                <View
                  style={{
                    backgroundColor: "red",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                >
                  <MaterialIcon name="trash-can" size={24} color="white" />
                </View>
              )}
            >
              <CartItem
                dataTarget={item}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </Swipeable>
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

export default Cart;
