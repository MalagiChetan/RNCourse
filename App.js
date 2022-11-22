import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import InputComponent from "./components/InputComponent";
import ListRender from "./components/ListRender";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleNewGoalPress = () => {
    setShowModal(true);
  };

  const addGoalHandler = (goal) => {
    setGoals((prev) => [...prev, { text: goal, id: Math.random().toString() }]);
    setShowModal(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        onPress={handleNewGoalPress}
        color="#1e11fe"
      />
      <InputComponent
        addGoalHandler={addGoalHandler}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <ListRender goals={goals} setGoals={setGoals} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: backgroundColor,
  },
});
