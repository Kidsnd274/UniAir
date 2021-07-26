import { useNavigation } from "@react-navigation/native";
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
import { store, persistor } from "../redux/store";
import { deleteLocalStore } from "../redux/actions";

const Settings = (props) => {
  
  const navigationRaw = useNavigation()
  const purger = () => {
    deleteLocalStore()
    setTimeout(() => navigationRaw.navigate("Welcome"),30)
  }
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
      <Menu.Item
        icon="menu"
        onPress={() => {purger()}}
        title="Clear Local Data"
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
