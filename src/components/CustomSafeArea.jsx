import { View } from "react-native";

const CustomSafeArea = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
        gap: 15,
        backgroundColor: "#DDDDDD",
      }}
    >
      {children}
    </View>
  );
};
export default CustomSafeArea;
