import React from "react";

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { Menu } from "react-native-paper";

const Settings = (props) => {
  return (
    <View style={styles.container}>
      <Menu.Item
        icon="google"
        onPress={() => props.navigation.navigate("Google Sign in")}
        title="Connect to Google"
      />
      <Menu.Item
        icon="menu"
        onPress={() => props.navigation.navigate("Edit Controller Details")}
        title="Edit Controller Details"
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: { flex: 1, flexDirection: "column", paddingTop: 20 },
  scrollViewOptions: {
    borderWidth: 1,
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
});
