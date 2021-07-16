import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Alert, ToastAndroid, Platform } from "react-native";
import { Input } from "react-native-elements";
import { addController } from "../redux/actions";
import { Button } from "react-native-paper";
import { serverSetup, getToken } from "../redux/api";


const ServerSetup = (props) => { // Should be ServerSetup
  const [airconModel, setAirconModel] = useState("mitsubishi_kh18a")
  const [lircdAddress, setLircdAddress] = useState("/var/run/lirc/lircd-tx") // Default lircd address
  const [newPassword, setNewPassword] = useState("");

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

  const registerButton = async () => {
    if (newPassword == "") {
      notifyMessage("Your Password can't be empty!")
    } else {
      const ipAddress = props.route.params.ipAddress
      const portNo = props.route.params.portNo
      const roomName = props.route.params.roomName
      const payload = {
        'aircon_model': airconModel,
        'lircd_address': lircdAddress,
        'password': newPassword,
      }
      notifyMessage("Setting up server...")
      const result = await serverSetup(ipAddress, portNo, payload)
      if (result.status == 200) {
        // Successful
        console.log("LOG: Getting token...")
        const tokenResponse = await getToken(ipAddress, portNo, newPassword)
        if (tokenResponse.error == null) {
          const token = tokenResponse.token
          addController(ipAddress, portNo, roomName, token)
          notifyMessage(roomName + " Controller created successfully!")
          props.navigation.navigate("ControllerList");
        } else {
          console.log(tokenResponse)
          console.error("ERROR: Something went wrong when setting up server")
          notifyMessage("Something went wrong\nPlease check logs")
        }
      } else {
        console.log(result)
        console.error("ERROR: Something went wrong when setting up server")
        notifyMessage("Something went wrong\nPlease check logs")
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.mainView}>
      <Text style={styles.paragraphText}>Connected. Please setup your UniAir Server</Text>
      <View style={styles.horizontalLine} />
      <Input
          label="Aircon Model"
          placeholder="mitsubishi_kh18a"
          value={airconModel}
          leftIcon={{ type: "material-community", name: "bed-king" }}
          onChangeText={(x) => setAirconModel(x)}
          labelStyle={styles.textInputLabelStyle}
          renderErrorMessage={false}
        />
      <Text style={[styles.subText, styles.textLabelStyle]}>
        Used for LIRC. Currently only "mitsubishi_kh18a" is working
      </Text>
      <Input
          label="LIRCD Address"
          placeholder="/var/run/lirc/lircd-tx"
          value={lircdAddress}
          leftIcon={{ type: "material-community", name: "format-align-left" }}
          onChangeText={(x) => setLircdAddress(x)}
          labelStyle={styles.textInputLabelStyle}
          renderErrorMessage={false}
        />
      <Text style={[styles.subText, styles.textLabelStyle]}>
        Leave this as default if you are not sure
      </Text>
      <Input
          label="New Password"
          placeholder="Password"
          leftIcon={{ type: "material-community", name: "lock" }}
          onChangeText={(x) => setNewPassword(x)}
          secureTextEntry={true}
          onSubmitEditing={registerButton}
          labelStyle={styles.textInputLabelStyle}
          renderErrorMessage={false}
        />
      <Text style={[styles.subText, styles.textLabelStyle]}>
        Used to login to UniAir Server's website and mobile app
      </Text>
      <View style={styles.buttonViewStyle}>
        <Button
          mode="outlined"
          style={styles.buttonStyle}
          onPress={backButton}
        >
        <Text>Back</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.buttonStyle}
          onPress={registerButton}
        >
        <Text>Register</Text>
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
    alignItems: "flex-start",
  },
  paragraphText: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  horizontalLine: {
    width: "95%",
    borderBottomColor: "grey",
    borderBottomWidth: 0.6,
    marginBottom: 16,
    alignSelf: "center",
  },
  textInputLabelStyle: {
    color: "black",
    fontSize: 18,
    fontWeight: "normal",
  },
  buttonViewStyle: {
    width:"100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonStyle: {
    marginRight: 20,
  },
  subText: {
    fontSize: 12,
    color: "#9B9B9B",
  },
  textLabelStyle: {
    marginLeft: 12,
    marginTop: 6,
    marginBottom: 18,
  },
});

export default ServerSetup;
