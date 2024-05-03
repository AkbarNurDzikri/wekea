import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import currencyFormatter from "../../utils/currencyFormatter";

const RightContent = ({ dataTarget, decreaseQty, increaseQty }) => {
  const subTotal = dataTarget.item.qty * dataTarget.item.price;

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
          onPress={() => decreaseQty(dataTarget.index)}
        />
        <Text>{dataTarget.item.qty}</Text>
        <Button
          mode="text"
          icon="plus"
          onPress={() => increaseQty(dataTarget.index)}
        />
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>
          {currencyFormatter(subTotal)}
        </Text>
      </View>
    </View>
  );
};

export default RightContent;
