import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./stateManagement/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import MasterNavigator from "./navigation/MasterNavigator";

export default function App() {
  // const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();


    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <MasterNavigator />
        </SafeAreaProvider>
      </Provider>
    );

}
