import CustomSafeArea from "../../components/CustomSafeArea";
import { View, Image } from "react-native";
import { List, Text } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import data from "../../utils/dummyDataProducts";
import currencyFormatter from "../../utils/currencyFormatter";

const Cart = () => {
  return (
    <CustomSafeArea>
      <FlatList data={data} renderItem={(item) => <CartItem data={item} />} />
    </CustomSafeArea>
  );
};

const CartItem = ({ data }) => {
  return (
    <List.Item
      left={() => <LeftContent data={data} />}
      style={{ paddingVertical: 0 }}
    />
  );
};

const LeftContent = ({ data }) => (
  <View
    style={{
      flexDirection: "row",
      gap: 20,
      padding: 10,
      marginHorizontal: 10,
      width: "100%",
      backgroundColor: "white",
      borderRadius: 5,
      alignItems: "center",
    }}
  >
    <Image
      source={{ uri: data.item.source }}
      style={{ width: 50, height: 50, borderRadius: 5 }}
    />
    <View>
      <Text variant="titleMedium">{data.item.title}</Text>
      <Text variant="titleSmall">{currencyFormatter(data.item.price)}</Text>
    </View>
  </View>
);

const RightContent = ({ data }) => {
  return {};
};

export default Cart;
