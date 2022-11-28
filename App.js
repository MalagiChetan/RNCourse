import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);
  console.log(guessRounds);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const gameRoundCounter = () => {
    setGuessRounds((prev) => prev + 1);
  };

  const onStartNewGame = () => {
    setIsGameOver(false);
    setUserNumber("");
    setGuessRounds(0);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumber(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        setIsGameOver={setIsGameOver}
        gameRoundCounter={gameRoundCounter}
      />
    );
  }
  if (isGameOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        startNewGame={onStartNewGame}
        guessRounds={guessRounds}
      />
    );
  }

  return (
    <>
      <LinearGradient
        colors={[Colors.purple, Colors.yellow300]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode={"cover"}
          style={styles.rootScreen}
          imageStyle={styles.imageStyle}
        >
          <SafeAreaView>{screen}</SafeAreaView>
          {/* {screen} */}
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.35,
  },
});
