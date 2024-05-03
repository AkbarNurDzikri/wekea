import currencyFormatter from "../../utils/currencyFormatter";
import { View, Image } from "react-native";
import { Text } from "react-native-paper";

const LeftContent = ({ dataTarget }) => (
  <View
    style={{
      flexDirection: "row",
      gap: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      alignItems: "center",
    }}
  >
    <Image
      source={{ uri: dataTarget.item.source }}
      style={{ width: 50, height: 50, borderRadius: 5 }}
    />
    <View>
      <Text variant="titleMedium">{dataTarget.item.title}</Text>
      <Text variant="titleSmall">
        {currencyFormatter(dataTarget.item.price)}
      </Text>
    </View>
  </View>
);

export default LeftContent;
