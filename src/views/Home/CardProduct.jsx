import { ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import data from "../../utils/dummyDataProducts";

const CardGenerator = ({ imageSource, title, price }) => (
  <Card
    style={{
      overflow: "hidden",
      width: 150,
      marginRight: 20,
      marginVertical: 5,
    }}
  >
    <Card.Cover
      source={{ uri: imageSource }}
      style={{ borderRadius: 0, height: 150 }}
    />
    <Card.Content style={{ padding: 10 }}>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="bodyLarge">Rp. {price}</Text>
    </Card.Content>
  </Card>
);

const CardProduct = () => {
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
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CardProduct;
