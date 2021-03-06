import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { updateTab } from "../redux/actions";

const Tabs = (props) => {
  const controllerData = useSelector(
    (state) => state.airconReducer.aircons[props.id]
  );
  // const [aircon_tab, set_aircon_tab] = useState(controllerData.aircon_tab);
  const aircon_tab = useSelector(
    (state) => state.airconReducer.aircons[props.id].aircon_tab
  );

  const changeTab = (x) => {
    console.log("Change Tab: Component/Tab");
    updateTab(props.id, x);
  };

  const selectedTabGroup = (x) => {
    if (x == aircon_tab) {
      return "#0077b6"
    }
    return "#FFFF"
  }

  const selectedIconGroup = (x) => {
    if (x == aircon_tab) {
      return "#FFFF"
    }
    return "#0077b6"
  }

  return (
    <View style={styles.container}>
      <View style = {[styles.subcontainer, {backgroundColor : selectedTabGroup("1")}]}>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => changeTab("1")}
        >
          <Text>
            <Icon name="fan" type="material-community" size={30} color = {selectedIconGroup("1")}/>
          </Text>
        </TouchableOpacity>
      </View>
      <View style = {[styles.subcontainer, {backgroundColor : selectedTabGroup("2")}]}>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => changeTab("2")}
        >
          <Text>
            <Icon
              name="clock-time-eight-outline"
              type="material-community"
              size={30}
              color = {selectedIconGroup("2")}
            />
          </Text>
        </TouchableOpacity>
      </View>
      <View style = {[styles.subcontainer, {backgroundColor : selectedTabGroup("3")}]}>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => changeTab("3")}
        >
          <Text>
            <Icon
              name="weather-partly-lightning"
              type="material-community"
              size={30}
              color = {selectedIconGroup("3")}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  subcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "green",
  }

  ,touchableStyle: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "#00B4D8",
    width: "100%",
  }
});

export default Tabs;
