import { StyleSheet } from "react-native";
import { useState } from "react";
import CustomSplashScreen from "./SplashScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { PaperProvider } from "react-native-paper";
import { persistor, store } from "./src/redux/store";
import AppNavigator from "./BottomNavigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
              {isLoading ? (
                <CustomSplashScreen onLoad={handleLoad} />
              ) : (
                <AppNavigator />
              )}
            </NavigationContainer>
          </ApplicationProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
