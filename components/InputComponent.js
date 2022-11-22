import {
  Alert,
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const InputComponent = ({ addGoalHandler, showModal, setShowModal }) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  return (
    <Modal visible={showModal} animationType="fade">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/target.jpg")} style={styles.image} />

        <TextInput
          value={goal}
          style={styles.textInput}
          placeholder="Enter your tasks!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                addGoalHandler(goal);
                setGoal("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => {
                setShowModal(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 8,
    margin: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    marginHorizontal: 8,
  },
});
