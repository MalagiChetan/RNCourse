import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    padding: 20,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "white",
  },
});
