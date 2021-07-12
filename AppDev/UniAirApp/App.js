import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Controller from "./screens/Controller";
import Registration from "./screens/Registration";
import ControllerSelectorMain from "./screens/ControllerSelectorMain";
import ControllerSelectorNavigation from "./navigation/ControllerSelectorNavigation";
import Welcome from "./navigation/WelcomeNavigation";
import SettingsNavigation from "./navigation/SettingsNavigation";
import AuthScreen from "./screens/AuthScreen";
import NavigationDrawerContent from "./components/NavigationDrawerContent";
import ControllerEditor from "./screens/ControllerEditor";
import ControllerSettingNavigation from "./navigation/ControllerSettingNavigation";
import ControllerSettingMain from "./screens/ControllerSettingMain";
import TestScreen from "./screens/TestScreen";
import MainAppBar from "./components/appbar/MainAppBar";
import { Provider as PaperProvider } from "react-native-paper";
import SchedulerScreen from "./components/SchedulerScreen";

export default function App() {
  const mainData = store.getState().airconReducer;
  const Drawer = createDrawerNavigator();

  function ControllerCreator(dataSet) {
    return () => {
      return <Controller data={dataSet} />;
    };
  }

  // LogBox.ignoreAllLogs(true);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Welcome"
            drawerContent={(props) => <NavigationDrawerContent {...props} />}
          >
            <Drawer.Screen name="Welcome" component={Welcome} />
            <Drawer.Screen
              name="ControllerList"
              component={ControllerSelectorNavigation}
            />
            <Drawer.Screen name="Settings" component={SettingsNavigation} />
            <Drawer.Screen name="Sign In" component={AuthScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
        {/* <SchedulerScreen/> */}
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
