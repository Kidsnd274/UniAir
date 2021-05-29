import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";

const Tabs = () => {
  const Misc = () => {
    return (
      <TouchableOpacity style={styles.touchableStyle}>
        <Text>
          <Icon name="fan" type="material-community" size={30} />
        </Text>
      </TouchableOpacity>
    );
  };

  const Scheduler = () => {
    return (
      <TouchableOpacity style={styles.touchableStyle}>
        <Text>
          <Icon
            name="clock-time-eight-outline"
            type="material-community"
            size={30}
          />
        </Text>
      </TouchableOpacity>
    );
  };

  const Other = () => {
    return (
      <TouchableOpacity style={styles.touchableStyle}>
        <Text>
          <Icon
            name="weather-partly-lightning"
            type="material-community"
            size={30}
          />
        </Text>
      </TouchableOpacity>
    );
  };

  const buttons = [
    { element: Misc },
    { element: Scheduler },
    { element: Other },
  ];
  return <View style = {styles.container}><ButtonGroup buttons={buttons} containerStyle={{ height: 50, width: "90%" }} /></View>

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  touchableStyle: {
    flex:1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "green",
    width: "25%",
    margin: 10,
    borderRadius: 10,
  },
});

export default Tabs;