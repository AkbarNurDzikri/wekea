import { View, Text, Dimensions, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("screen").height,
      }}
    >
      <Text style={{ fontSize: 20 }}>Home Screen</Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
};

export default Home;
