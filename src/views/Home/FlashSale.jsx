import { FlatList, Image, Pressable, View } from "react-native";
import { Text } from "react-native-paper";

const FlashSale = () => {
  return (
    <View>
      <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
        Flash Sale!
      </Text>
      <FlatList
        numColumns={2}
        data={Array(4)}
        renderItem={() => (
          <Pressable style={{ flex: 1, height: 100, margin: 3 }}>
            <Image
              source={{
                uri:
                  "https://images.unsplash.com/photo-1542992015-4a0b729b1385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZsYXNoJTIwc2FsZXxlbnwwfHwwfHx8MA%3D%3D",
              }}
              style={{ width: "100%", height: "100%", borderRadius: 5 }}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export default FlashSale;
