import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons'; 


const TemperatureController = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.TouchableStyle}>
          <Text><FontAwesome5 name="power-off" size={24} color="black" />Power</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableStyle}>
          <Text><Entypo name="tree" size={24} color="black" />EcoMode</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subcontainer}>
        <FontAwesome5 name="temperature-low" size={24} color="black" />
        <TouchableOpacity style={styles.TouchableStyle}>
        <AntDesign name="arrowup" size={24} color="black" /><Text>Temperature Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableStyle}>
          <Text>Temperature Down</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subcontainer}>
        <FontAwesome5 name="fan" size={24} color="black" />
        <TouchableOpacity style={styles.TouchableStyle}>
          <Text>Fan Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableStyle}>
          <Text>Fan Down</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  subcontainer: {
    flex: 1,
    alignContent: "center",
    flexDirection: "row",
    alignItems: "center",
    height: 100,
  },

  TouchableStyle: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 44,
    width: 150,
    margin: 10,
  },
});

export default TemperatureController;
