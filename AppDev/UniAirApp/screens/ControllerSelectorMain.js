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



const ControllerSelectorMain = (props) => {
  // const Stack = createStackNavigator();
  const Selector = (info) => {
    return (<TouchableOpacity style={styles.selector} onPress = {() => {props.navigation.navigate(info)}}>
      <Text>{info}</Text>
      <View style={styles.selectorDisplay}>
        <Icon type="material-community" name="tailwind"></Icon>
      </View>
    </TouchableOpacity>)
  };

  const controllerData = useSelector(
    (state) => state.airconReducer
  );

  return (
    <View style={styles.container}>
      {/* <Header
        centerComponent={<Text>Controller</Text>}
        leftComponent={<Icon name="tailwind" type="material-community" />}
      /> */}
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.childScrollView}
      >
        {controllerData.aircons.map((x) => Selector(x.roomName))}
      </ScrollView>
    </View>
  );
};


const SelectorInformation = (info) => {
  <View>
    <Icon></Icon>
    <Text>{info}</Text>
  </View>;
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

export default ControllerSelectorMain;
