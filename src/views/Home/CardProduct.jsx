import { ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import data from "../../utils/dummyDataProducts";
import { useNavigation } from "@react-navigation/native";
import currencyFormatter from "../../utils/currencyFormatter";

const CardGenerator = ({ imageSource, title, price, navigation }) => (
  <Card
    style={{
      overflow: "hidden",
      width: 150,
      marginRight: 20,
      marginVertical: 5,
    }}
    onPress={() => navigation.navigate("Details")}
  >
    <Card.Cover
      source={{ uri: imageSource }}
      style={{ borderRadius: 0, height: 150 }}
    />
    <Card.Content style={{ padding: 10 }}>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="bodyLarge">{currencyFormatter(price)}</Text>
    </Card.Content>
  </Card>
);

const CardProduct = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
        Popular
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((d, i) => {
          return (
            <CardGenerator
              key={i}
              imageSource={d.source}
              title={d.title}
              price={d.price}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CardProduct;
