import { View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const CategoryGenerator = ({ name, color, label }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 75,
        width: 75,
        borderRadius: 75 / 2,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialIcon name={name} size={24} color={color} />
      <Text style={{ maxWidth: 50 }}>{label}</Text>
    </View>
  );
};

const Category = () => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CategoryGenerator name="mouse" color="black" label="Mouse" />
        <CategoryGenerator name="monitor" color="black" label="Monitor" />
        <CategoryGenerator name="cpu-64-bit" color="black" label="CPU" />
        <CategoryGenerator
          name="battery-charging-medium"
          color="black"
          label="Power Bank"
        />
        <CategoryGenerator name="laptop" color="black" label="Laptop" />
        <CategoryGenerator
          name="router-wireless"
          color="black"
          label="Router"
        />
      </ScrollView>
    </View>
  );
};

export default Category;
