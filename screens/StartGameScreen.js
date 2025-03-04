import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions, // хук для динамического управления высотой и щириной *поменять в app.json position на default
  KeyboardAvoidingView, //когда клавиатура открыта, то контент двигается вверх - обернуть и создать новый стиль!
  ScrollView, //чтобы работал KeyboardAvoidingView на ios, обернем это в скролл
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  //этот встроенный хук смотрит за иземенениями в размерах девайса.
  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber); //это переведет полученную строку в число

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //если у нас не число isNaN() - это стандартная проверка, или меньше нуля или больше 99, то покажи алерт
      //show alert
      Alert.alert(
        "Invalid Number!!!",
        "Number has to be a number between 1 and 99!!!",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    //console.log("Valid Number");
    onPickNumber(chosenNumber);
  }

  // responsive screen
  const marginTopDistance = height < 300 ? 30 : 10;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad" //different for different devices
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

//const deviceHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 50,
    fontSize: 35,
    borderBottomColor: Colors.border,
    borderBottomWidth: 2,
    color: Colors.underline,
    marginVertical: 10,
    //marginTop:15,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 300 ? 30 : 100,
    alignItems: "center",
  },
  screen: {
    flex: 1,
  },
});
