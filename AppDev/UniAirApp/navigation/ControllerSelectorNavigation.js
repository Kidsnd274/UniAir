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
import ControllerSelectorMain from "../screens/ControllerSelectorMain";
import { useSelector } from "react-redux";
import Controller from "../screens/Controller";
import ControllerAppBar from "../components/appbar/ControllerAppBar";

const ControllerSelectorNavigation = () => {
  function ControllerCreator(dataSet) {
    return () => {
      return <Controller data={dataSet} />;
    };
  }

  const controllerData = useSelector((state) => state.airconReducer);
  

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Controllers"
      

      // screenOptions={{
      //   header: ({ scene, navigation }) => (
      //     <ControllerAppBar scene={scene} navigation={navigation} />
      //   ),
      // }}
    >
      <Stack.Screen
        name="Controllers"
        component={ControllerSelectorMain}
        // options={{ headerTitle: "Controller List" }}
      />
      {controllerData.aircons.map((x) => (
        <Stack.Screen
          name={x.roomName}
          component={ControllerCreator(x)}
          // options={{ headerTitle: x.id }}
          options={{ headerShown:false }}
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
    width: "80%",
    alignContent: "center",
    marginVertical: 10,
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

export default ControllerSelectorNavigation;


