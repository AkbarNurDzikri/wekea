import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { Button } from "react-native-paper";

const MySearchbar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={12} />
        <TextInput placeholder="Mau cari apa nih?" />
      </View>
      <Button style={{ alignItems: "flex-end" }} icon="menu" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    padding: 10,
    gap: 10,
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

export default MySearchbar;
