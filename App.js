import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1 items-center justify-center bg-purple-950">
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
