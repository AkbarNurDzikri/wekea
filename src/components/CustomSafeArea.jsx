import { View } from "react-native";

const CustomSafeArea = ({ children }) => {
  return <View style={{ marginTop: 25 }}>{children}</View>;
};
export default CustomSafeArea;
