import { View, Text, Dimensions, Button } from "react-native";
import { Button as PaperButton } from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("screen").height,
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Home Screen</Text>

      <Text>Button Default:</Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />

      <Text style={{ marginTop: 10 }}>Button RN Paper</Text>
      <PaperButton
        icon="magnify-plus"
        mode="contained"
        onPress={() => navigation.navigate("Details")}
      >
        Details
      </PaperButton>
    </View>
  );
};

export default Home;
