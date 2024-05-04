import { List } from "react-native-paper";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const CartItem = ({ dataTarget, cartItems, setCartItems }) => {
  return (
    <List.Item
      left={() => <LeftContent dataTarget={dataTarget} />}
      right={() => (
        <RightContent
          dataTarget={dataTarget}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
      style={{ paddingVertical: 0 }}
    />
  );
};

export default CartItem;
