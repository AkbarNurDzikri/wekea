import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import currencyFormatter from "../../utils/currencyFormatter";

const RightContent = ({ dataTarget, cartItems, setCartItems }) => {
  const subTotal = dataTarget.item.qty * dataTarget.item.price;
  const handleQty = (itemIndex, condition) => {
    const updatedCartItems = cartItems.map((item, index) => {
      if (index === itemIndex) {
        return {
          ...item,
          qty: condition === "increment" ? item.qty + 1 : item.qty - 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          disabled={dataTarget.item.qty === 1}
          mode="text"
          icon="minus"
          onPress={() => handleQty(dataTarget.index, "decrement")}
        />
        <Text variant="bodyMedium">{dataTarget.item.qty}</Text>
        <Button
          mode="text"
          icon="plus"
          onPress={() => handleQty(dataTarget.index, "increment")}
        />
      </View>
      <View>
        <Text variant="bodyMedium" style={{ fontWeight: "bold" }}>
          {currencyFormatter(subTotal)}
        </Text>
      </View>
    </View>
  );
};

export default RightContent;
