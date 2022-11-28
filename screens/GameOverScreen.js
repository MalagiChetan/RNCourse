import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ userNumber, startNewGame, guessRounds }) => {
  return (
    <View style={styles.GoContainer}>
      <Title>Game Over!</Title>
      <View style={styles.img}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summary}>
        Your phone needed <Text style={styles.text}>{guessRounds}</Text> rounds
        to guess your number <Text style={styles.text}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  GoContainer: {
    marginVertical: 24,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.yellow300,
    overflow: "hidden",
    margin: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  text: {
    fontFamily: "open-sans-bold",
    color: Colors.yellow300,
  },
});
