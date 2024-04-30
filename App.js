import Router from "./src/routers";
import { PaperProvider } from "react-native-paper";

const App = () => {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  );
};

export default App;
