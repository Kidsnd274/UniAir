import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Icon, Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import ControllerEditor from "./ControllerEditor";
import ControllerSettingMain from "./ControllerSettingMain";

const ControllerSettingNavigation = () => {
  function ControllerEditorCreator(dataSet) {
    return () => {
      return <ControllerEditor data={dataSet} />;
    };
  }

  const controllerData = useSelector((state) => state.airconReducer);

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Controllers"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Controllers" component={ControllerSettingMain} />
      {controllerData.aircons.map((x) => (
        <Stack.Screen
          name={x.roomName}
          component={ControllerEditorCreator(x)}
          options={headerStyling}
        />
      ))}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  scrollview: {
    flex: 1,
    width: "100%",
    margin: 10,
    alignContent: "space-between",
  },
  childScrollView: { alignItems: "center" },
  selector: {
    flexDirection: "column",
    flex: 1,
    borderWidth: 1,
    width: "80%",
    alignContent: "center",
    marginVertical: 10,
    borderColor: "red",
    alignItems: "center",
  },
  selectorDisplay: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  selectorInformation: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
});

const headerStyling = {
  headerStyle: {
    backgroundColor: "#00B4D8",
  },
  headerTitleStyle: {
    color: "#FFFF",
  },
};
export default ControllerSettingNavigation;
