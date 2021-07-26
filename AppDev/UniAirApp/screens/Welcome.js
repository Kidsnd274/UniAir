import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { persistStore } from "redux-persist";
import firebase from "../database/firebaseConfig";
import "firebase/auth";
import "firebase/firestore";

const Welcome = (props) => {
  // console.log(firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid))
  // console.log(String(firebase.auth().currentUser.uid))

  return (
    <View style={styles.container}>
      <View style={styles.subContainerTop}>
        <Text style={styles.tagLine}>UNI</Text>
        <View style={styles.tagLine2Container}>
          <Text style={styles.tagLine2}>AIR</Text>
        </View>
      </View>
      <View style={styles.subContainerBottom}>
        <TouchableOpacity
          style={styles.buttonStyleLearnMore}
          onPress={() => [props.navigation.navigate("Learn More")]}
        >
          <Text style={styles.textLearnMore}>Learn More</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyleRegister}
          onPress={() => [props.navigation.navigate("Registration")]}
        >
          <Text style={styles.textRegister}>Register</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => persistStore(this.props).purge()}
          style={styles.buttonStyleLearnMore}
        >
          <Text>Hi</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  subContainerTop: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#FFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  subContainerBottom: {
    flex: 2,
    backgroundColor: "#00B4D8",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    padding: "10%",
  },

  textRegister: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 20,
    color: "#00B4D8",
  },

  tagLine: {
    justifyContent: "flex-end",
    textAlign: "center",
    alignItems: "flex-end",
    fontSize: 75,
    color: "#00B4D8",
  },

  tagLine2: {
    justifyContent: "flex-end",
    textAlign: "center",
    alignItems: "flex-end",
    fontSize: 60,
    color: "#FFFF",
  },

  tagLine2Container: {
    backgroundColor: "#00B4D8",
  },

  textLearnMore: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 20,
    paddingTop: "2.2%",
    color: "#FFFF",
  },
  buttonStyleLearnMore: {
    flexDirection: "row",
    backgroundColor: "#00B4D8",
    borderRadius: 30,
    width: "75%",
    height: "10%",
    margin: 10,
    borderWidth: 2,
    borderColor: "#FFFF",
    justifyContent: "center",
  },
  buttonStyleRegister: {
    flexDirection: "row",
    backgroundColor: "#FFFF",
    borderRadius: 30,
    width: "75%",
    height: "10%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
