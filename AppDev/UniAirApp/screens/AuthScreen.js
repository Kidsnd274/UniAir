import React, { useState, useEffect, Component } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as Google from 'expo-google-app-auth';
// import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import firebase from "../database/firebaseConfig"

const auth = firebase.auth();

const AuthScreen = () => {
  // const [user, setUser] = useState(() => auth.currentUser);
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [googleUserState, setGoogleUserState] = useState(null);

  // Firebase config stuff
  const googleSignInConfig = {
    androidClientId:
      "302102177397-5mrsf185tgiob8sdki7rfvrokagdoje4.apps.googleusercontent.comr",
    scopes: ["profile", "email"],
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });
  });

  const firebaseLogin = (idToken, accessToken) => {
    const credential = firebase.auth.GoogleAuthProvider.credential(
      idToken,
      accessToken
    );
    firebase.auth().signInWithCredential(credential).catch(
      (error) => {
        console.error("Error: Firebase login " + error);
      }
    )
  }

  // GoogleSignIn Commands (Android)
  const componentDidMount = () => {
    this.initAsync();
  }

  const initAsync = async () => {
    await GoogleSignIn.initAsync();
    _syncUserWithStateAsync();
  }

  const _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setGoogleUserState(user);
  }

  const gSI_signInAsync = async () => {
    const { type, user } = await GoogleSignIn.signInAsync();
    if (type === 'success') {
      _syncUserWithStateAsync();
      const idToken = user.auth.idToken;
      const accessToken = user.auth.accessToken;
      firebaseLogin(idToken, accessToken);
    }
  }

  const gSI_signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    this.setState({ user: null });
  }

  // Google for Expo Go Commands (Expo Go)
  const expo_signInWithGoogle = async () => {
    const { idToken, accessToken } = await expo_signInWithGoogleAsync();
    firebaseLogin(idToken, accessToken);
  }

  const expo_signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync(googleSignInConfig);
      if (result.type === "success") {
        return result;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.error("Error: " + e);
      return { error: true };
    }
  }

  const expo_signOutWithGoogle = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error: " + error)
    }
  }

  // General Commands
  const signInWithGoogle = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      console.log("LOG: Google Services found! at ./screen/AuthScreen")
      await gSI_signInAsync(); // user prob set here or something
    } catch ({message}) {
      console.error("Error: " + message);
      await expo_signInWithGoogle();
    }
  }

  const signOutWithGoogle = async () => {
    try {
      await gSI_signOutAsync();
    } catch ({message}) {
      console.error("Error: " + message);
      await expo
    }
  }

  return (<View style = {styles.container}>
    <TouchableOpacity style={styles.button} onPress={signInWithGoogle}>
      <Text style={styles.btnText}>Sign in with Google </Text>
      <Icon type="material-community" name="google" color = "#748cf8"/>
    </TouchableOpacity>
  </View>)
}

const styles = StyleSheet.create({
  container : {flex: 1, justifyContent: "center"},
  button: {
    backgroundColor: "white",
    width: "70%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 10,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#748cf8"
  },
  btnText: {
    color: "#748cf8",
    fontSize: 18,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold"
  },
})

export default AuthScreen;