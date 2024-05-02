import { ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";

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
  const data = [
    {
      source:
        "https://images.unsplash.com/photo-1602837385569-08ac19ec83af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3NkfGVufDB8fDB8fHww",
      title: "SSD",
      price: 20000,
    },
    {
      source:
        "https://images.unsplash.com/photo-1588382472578-8d8b337b277a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNzZHxlbnwwfHwwfHx8MA%3D%3D",
      title: "CPU",
      price: 10525000,
    },
    {
      source:
        "https://images.unsplash.com/photo-1577538926210-fc6cc624fde2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3NkfGVufDB8fDB8fHww",
      title: "PowerBank",
      price: 700000,
    },
    {
      source:
        "https://images.unsplash.com/photo-1631553127988-36343ac5bb0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNzZHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Main Board",
      price: 2500000,
    },
  ];

  return (
    <View
      style={{
        marginHorizontal: 15,
      }}
    >
      <Text
        variant="headlineSmall"
        style={{ fontWeight: "bold", marginBottom: 10 }}
      >
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
