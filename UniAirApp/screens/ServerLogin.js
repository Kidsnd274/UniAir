import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Platform, ToastAndroid, Alert } from "react-native";
import { Input } from "react-native-elements";
import { addController } from "../redux/actions";
import { Button } from "react-native-paper";
import { getToken } from "../redux/api";

const ServerLogin = (props) => {
  const [password, setPassword] = useState("");

  function notifyMessage(msg) {
    if (Platform.OS == "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      Alert.alert(msg)
    }
  }

  const backButton = () => {
    props.navigation.goBack()
  }

  const submitPassword = async () => {
      const ipAddress = props.route.params.ipAddress
      const portNo = props.route.params.portNo
      const roomName = props.route.params.roomName

      console.log("LOG: Getting token...")
      notifyMessage("Logging in...")
      const tokenResponse = await getToken(ipAddress, portNo, password)
      if (tokenResponse.error == null) {
        const token = tokenResponse.token
        addController(ipAddress, portNo, roomName, token)
        notifyMessage(roomName + " Controller created successfully!")
        props.navigation.navigate("ControllerList");
      } else {
        console.log(tokenResponse)
        console.error("ERROR: Something when wrong when setting up the server")
        notifyMessage("Something went wrong\nPlease check logs")
      }
  }

  return (
    <ScrollView contentContainerStyle={styles.mainView} keyboardShouldPersistTaps='handled'>
      <Text style={styles.titleText}>Knock! Knock!</Text>
      <Text style={styles.subText}>What's the password?</Text>
      <Input
        placeholder="Password"
        style={styles.inputStyle}
        textAlign={"center"}
        secureTextEntry={true}
        autoFocus={true}
        onChangeText={pass => setPassword(pass)}
        onSubmitEditing={submitPassword}
      />
      <View style={styles.buttonViewStyle}>
        <Button
          mode="outlined"
          color="#0090AD"
          style={styles.buttonStyle}
          onPress={backButton}
        >
        <Text>Back</Text>
        </Button>
        <Button
          mode="contained"
          color="#00B4D8"
          style={styles.buttonStyle}
          onPress={submitPassword}
        >
        <Text>Login</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "column",
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  titleText: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 12,
  },
  subText: {
    fontSize: 24,
  },
  inputStyle: {
    marginTop: 24,
  },
  buttonViewStyle: {
    width:"100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonStyle: {
    marginRight: 20,
  },
});

export default ServerLogin;
