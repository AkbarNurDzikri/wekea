import { View, Text, Dimensions, Button } from "react-native";

const Details = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("screen").height,
      }}
    >
      <Text style={{ fontSize: 20 }}>Details Screen</Text>
      <Button
        title="Back use .navigate()"
        onPress={() => navigation.navigate("Home")}
      />
      <View style={{ marginTop: 10 }}>
        <Button
          title="Back use .goback()"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default Details;
