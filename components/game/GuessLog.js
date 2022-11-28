import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";

const GuessLog = ({ roundNumber, guess }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>System guessed number is {guess}</Text>
    </View>
  );
};

export default GuessLog;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.promary600,
    borderWidth: 2,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.yellow300,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, heigh: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    fontFamily: "open-sans",
  },
});
