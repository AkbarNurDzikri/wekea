import { View } from "react-native";

const CustomSafeArea = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
        gap: 15,
        backgroundColor: "#7BD3EA",
      }}
    >
      {children}
    </View>
  );
};
export default CustomSafeArea;
