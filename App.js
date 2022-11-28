import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useCallback } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const gameRoundCounter = () => {
    setGuessRounds((prev) => prev + 1);
  };

  const onStartNewGame = () => {
    setIsGameOver(false);
    setUserNumber("");
    setGuessRounds(0);
  };

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
        onLayout={onLayoutRootView}
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
