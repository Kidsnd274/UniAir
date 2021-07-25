import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainPage from "./screens/MainPage";

export default function App() {
  LogBox.ignoreAllLogs(true);

  const mainData = store.getState().airconReducer;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainPage />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const headerStyling = {
  headerStyle: {
    backgroundColor: "#00B4D8",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "#FFFF",
  },
};
