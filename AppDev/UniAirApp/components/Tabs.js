import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { updateTab } from "../redux/actions";

const Tabs = (props) => {
  const dispatch = useDispatch();
  const controllerData = useSelector(
    (state) => state.airconReducer.aircons[props.id]
  );
  const [aircon_tab, set_aircon_tab] = useState(controllerData.aircon_tab);

  const changeTab = (x) => {
    console.log("Change Tab: Component/Tab");
    updateTab(props.id, x)(dispatch);
  };

  return (
    <View style={styles.container}>
      <View style = {styles.subcontainer}>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => changeTab("1")}
        >
          <Text>
            <Icon name="fan" type="material-community" size={30} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.subcontainer}>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => changeTab("2")}
        >
          <Text>
            <Icon
              name="clock-time-eight-outline"
              type="material-community"
              size={30}
            />
          </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.subcontainer}>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => changeTab("3")}
        >
          <Text>
            <Icon
              name="weather-partly-lightning"
              type="material-community"
              size={30}
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
    borderColor: "green"
  }

  ,touchableStyle: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "blue",
    width: "100%",
  }
});

export default Tabs;
