import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  //это для смены экранов. Если у нас есть число от юзера, то меняем экран
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  //таким образом мы прикручиваем шрифты
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  //меняем экраны в зависимости от того, есть ли от юзера число
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.riple]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroudImage}
      >
        <SafeAreaView style={styles.safeArea}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    //backgroundColor: "#fec76f",
  },
  backgroudImage: {
    opacity: 0.15,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Добавляем отступ на Android
  },
});
