import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import GuessLog from "../components/game/GuessLog";

const randomNumberGenerator = (max, min, exc) => {
  let rndNo = Math.floor(Math.random() * (max - min)) + min;
  if (rndNo === exc) {
    return randomNumberGenerator(max, min, exc);
  } else {
    return rndNo;
  }
};
let minBoundry = 1;
let maxBoundry = 100;

const GameScreen = ({ userNumber, setIsGameOver, gameRoundCounter }) => {
  const initialGuess = randomNumberGenerator(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessedRounds, setGuessedRounds] = useState([initialGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Guessed value is in opposit direction");
      return;
    }
    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }

    const newRndNum = randomNumberGenerator(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newRndNum);
    setGuessedRounds((prev) => [newRndNum, ...prev]);
    gameRoundCounter();
  };

  useEffect(() => {
    if (userNumber === currentGuess) {
      setIsGameOver(currentGuess);
    }
  }, [currentGuess]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  const guessRoundsListLength = guessedRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.actions}>
        <Text style={styles.guess}>Higher or Lower? </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttons}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
      {/* {guessedRounds.map((guessRound) => (
        <Text key={guessRound}>{guessRound}</Text>
      ))} */}
      <View style={styles.listContainer}>
        <FlatList
          data={guessedRounds}
          keyExtractor={(guess) => guess}
          renderItem={(guessRound) => (
            <GuessLog
              roundNumber={guessRoundsListLength - guessRound.index}
              guess={guessRound.item}
            />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 12,
    marginTop: 80,
  },
  guess: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontFamily: "open-sans",
  },
  buttonsContainer: {
    // borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttons: {
    width: 150,
  },
  listContainer: {
    height: 300,
  },
});
