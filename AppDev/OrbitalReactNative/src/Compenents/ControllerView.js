import { StyleSheet, View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { ControllerContext } from "../Context/ControllerContext";


const ControllerView = props => {
  const [controllerDetails, setControllerDetails] =
    useContext(ControllerContext);

  return (
    <View style={styles.controllerInformationContainer}>
      <Text style={styles.controllerInformation}>
        Temperature = {controllerDetails.temperature}
      </Text>
      <Text style={styles.controllerInformation}>
        Fan Speed = {controllerDetails.fanSpeed}
      </Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   ContollerInformation:
//   {
//     fontSize: 20
//   }

// });

const styles = StyleSheet.create({
  controllerInformationContainer: {
    backgroundColor: "#fff",
    textAlign: 'center',
    textAlignVertical: "top",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 4,
    margin: 10,
    width: "100%",
    height: "100%",
    flex:1
  },

  controllerInformation: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ControllerView;
