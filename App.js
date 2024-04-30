import Router from "./src/routers";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <Router />
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
