import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import { Button, Dialog, Portal, Paragraph } from "react-native-paper";

const DialogComponent = (props) => {
  const [visible, setVisible] = React.useState(props.isVisible);

  const hideDialog = () => setVisible(false);
  const showDialog = () => setVisible(true);

  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={hideDialog}>
        <Dialog.Title>This is a title</Dialog.Title>
        <Dialog.ScrollArea>
          <Paragraph>This is simple dialog</Paragraph>
        </Dialog.ScrollArea>
        <Dialog.Actions>
          <Button onPress={() => hideDialog}>Cancel</Button>
          <Button onPress={() => props.function}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogComponent