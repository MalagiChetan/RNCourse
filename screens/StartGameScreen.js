import { StyleSheet, View, TextInput, Alert, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Colors } from "../constants/colors";
import Title from "../components/ui/Title";

const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleReset = () => {
    setEnteredNumber("");
  };

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const number = parseInt(enteredNumber);
    if (enteredNumber === "") {
      Alert.alert(
        "Entered number can't be empty",
        "Number has to be between 1 to 99",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
      return;
    }
    number === 0
      ? Alert.alert(
          "Entered number can't be zero",
          "Number has to be between 1 to 99",
          [{ text: "Okay", style: "destructive", onPress: handleReset }]
        )
      : number <= -1
      ? Alert.alert(
          "Entered number can't be less than zero",
          "Number has to be between 1 to 99",
          [{ text: "Okay", style: "destructive", onPress: handleReset }]
        )
      : setEnteredNumber(number);
    onConfirmNumber(number);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess The Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instruction}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          value={enteredNumber}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            {/* Buttons are imported, from custom button */}
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            {/* Buttons are imported, from custom button */}
            <PrimaryButton onPress={confirmInputHandler}>Game ON</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    marginTop: 100,
    padding: 8,
  },
  instruction: {
    color: Colors.yellow300,
    fontSize: 24,
  },
  inputContainer: {
    // flex: 1,
    // height: 200,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 80,
    padding: 16,
    backgroundColor: Colors.inputContainer,
    alignItems: "center",
    justifyContent: "center",
    // for shadow in android
    elevation: 4,
    // for shadow in iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  numberInput: {
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.yellow300,
    borderBottomWidth: 2,
    color: Colors.yellow300,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
