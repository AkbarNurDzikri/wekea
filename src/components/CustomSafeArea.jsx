import { View } from "react-native";

const CustomSafeArea = ({ children }) => {
  return <View style={{ flex: 1, paddingTop: 30, gap: 10 }}>{children}</View>;
};
export default CustomSafeArea;
