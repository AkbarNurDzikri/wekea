import CustomSafeArea from "../../components/CustomSafeArea";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { Button } from "react-native-paper";
import MyCarousel from "../../components/Carousel";

const Home = () => {
  return (
    <CustomSafeArea>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={12} />
          <TextInput placeholder="Mau cari apa nih?" />
        </View>
        <Button icon="menu" />
      </View>
      <MyCarousel />
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    padding: 10,
    gap: 10,
    flex: 1,
    borderRadius: 50,
    shadowColor: "gray",
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: "#f5f5f5",
  },
});

export default Home;
