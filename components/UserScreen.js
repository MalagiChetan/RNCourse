import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserScreen = ({ route, navigation }) => {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <View>
      <Text>UserScreen</Text>
      <Button title="open drawer" onPress={openDrawerHandler} />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
