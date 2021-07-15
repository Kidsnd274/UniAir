import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ToastAndroid,
  Platform,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import { addController, addTestController } from "../redux/actions";
import { useNavigation } from "@react-navigation/core";
import { Button, Checkbox, Switch, Snackbar } from "react-native-paper";
import { isServerSetupYet } from "../redux/api";

const Registration = () => {
  const [roomName, setRoomName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [advancedOptions, setAdvancedOptions] = useState(false);
  const [portNo, setPortNo] = useState("5000");
  const [testController, setTestController] = useState(false);
  const navigation = useNavigation();

  function notifyMessage(msg) {
    if (Platform.OS == "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      Alert.alert(msg)
    }
  }

  const submitNewController = () => {
    if (testController) {
      addTestController(roomName)
      navigation.navigate("ControllerList");
      notifyMessage("Test Controller Created")
    } else {
      // addController(ipAddress, portNo, roomName, testController);
    }
  };

  const testSetup = () => {
    let message = "";
    let setupBool = isServerSetupYet(ipAddress, portNo);
    if (setupBool === true) {
      message = "Connection Successful!\nServer has already been set up";
    } else if (setupBool === false) {
      message = "Connection Successful!\nServer has not been set up";
    } else {
      message = "Connection Unsuccessful\nPlease check IP Address and Port";
    }

    notifyMessage(message)
  };

  const renderAdvancedOptions = () => {
    if (advancedOptions) {
      return (
        <View style={styles.advancedOptionsStyle}>
          <Input
            label="Port Number (Default: 5000)"
            placeholder="5000"
            leftIcon={{ type: "material-community", name: "serial-port" }}
            value={portNo}
            onChangeText={(x) => setPortNo(x)}
            keyboardType="numeric"
            maxLength={5}
            disabled={testController}
            labelStyle={styles.textInputLabelStyle}
          />
          <View style={styles.itemToggleHorizontalStyle}>
            <Text style={[styles.textInputLabelStyle, styles.textLabelStyle]}>
              Test Connection
            </Text>
            <Button
              mode="outlined"
              onPress={testSetup}
              disabled={testController}
              style={styles.marginRightStyle}
            >
              Test
            </Button>
          </View>
          <View style={[styles.itemToggleHorizontalStyle, {
                marginTop: 20,
              }]}>
            <Text style={[styles.textInputLabelStyle, styles.textLabelStyle]}>
              Test Controller
            </Text>
            <Switch
              value={testController}
              onValueChange={() => setTestController(!testController)}
              style={styles.marginRightStyle}
            />
          </View>
          <Text style={[styles.subText, styles.textLabelStyle, styles.marginRightStyle]}>
            Test Controller is a dummy controller with no connected server.
            Intended for test purposes.
          </Text>
        </View>
      );
    } else {
      return <View></View>;
    }
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.topSegmentStyle}>
        <Text style={styles.paragraphText}>
          Enter the IP Address of your UniAir Server
        </Text>
        <View style={styles.horizontalLine} />
        <Input
          label="Room Name"
          placeholder="Living Room"
          leftIcon={{ type: "material-community", name: "bed-king" }}
          onChangeText={(x) => setRoomName(x)}
          labelStyle={styles.textInputLabelStyle}
        />
        <Input
          label="IP Address"
          placeholder="192.168.1.XX"
          leftIcon={{ type: "material-community", name: "web" }}
          onChangeText={(x) => setIpAddress(x)}
          disabled={testController}
          labelStyle={styles.textInputLabelStyle}
        />
        <View style={styles.itemToggleHorizontalStyle}>
          <Text style={[styles.textInputLabelStyle, styles.textLabelStyle]}>
            Advanced Options
          </Text>
          <Switch
            value={advancedOptions}
            onValueChange={() => setAdvancedOptions(!advancedOptions)}
            style={styles.marginRightStyle}
          />
        </View>
        {renderAdvancedOptions()}
      </View>
      <View style={styles.bottomButtonStyle}>
        <Button
          mode="outlined"
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text>Cancel</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.buttonStyle}
          onPress={submitNewController}
        >
          <Text>Connect</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  topSegmentStyle: {
    flexDirection: "column",
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  bottomButtonStyle: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  advancedOptionsStyle: {
    flexDirection: "column",
    marginLeft: 12,
    marginRight: 12,
    marginTop: 24,
    width: "100%",
  },
  itemToggleHorizontalStyle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  marginRightStyle: {
    marginRight: 12,
  },
  horizontalLine: {
    width: "95%",
    borderBottomColor: "grey",
    borderBottomWidth: 0.6,
    marginBottom: 16,
  },
  textInputLabelStyle: {
    color: "black",
    fontSize: 18,
    fontWeight: "normal",
  },
  textLabelStyle: {
    textAlignVertical: "center",
    alignContent: "center",
    marginLeft: 12,
  },
  paragraphText: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  subText: {
    fontSize: 12,
    color: "#9B9B9B",
  },
  buttonStyle: {
    marginVertical: 30,
    marginRight: 20,
  },
});

export default Registration;
