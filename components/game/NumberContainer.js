import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    margin: 24,
    borderColor: Colors.yellow300,
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffff00",
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
