import { View, TextInput, StyleSheet } from "react-native";
import { Searchbar, TouchableRipple, IconButton } from "react-native-paper";

const MySearchbar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <Searchbar style={styles.searchbar} placeholder="Mau cari apa?" />
      <TouchableRipple style={styles.touchable}>
        <IconButton icon="menu" />
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    gap: 10,
  },
  searchbar: {
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
  },
  touchable: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
  },
});

export default MySearchbar;
