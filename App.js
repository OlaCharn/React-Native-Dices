import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  //это для смены экранов. Если у нас есть число от юзера, то меняем экран
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  //меняем экраны в зависимости от того, есть ли от юзера число
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={[ Colors.primary500 , Colors.riple ]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroudImage}
      >
        <SafeAreaView style={styles.rootScreen} >{screen}</SafeAreaView>
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
});
