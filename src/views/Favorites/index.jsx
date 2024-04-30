import { View, Text, Dimensions } from "react-native";

const Favorites = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("screen").height,
      }}
    >
      <Text style={{ fontSize: 20 }}>Favorite Screen</Text>
    </View>
  );
};

export default Favorites;
