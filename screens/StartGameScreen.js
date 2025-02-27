import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

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

  return (
    <View style={styles.rootContainer}>
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
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

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
  rootContainer:{
    flex:1,
    marginTop: 100,
    alignItems: "center",
  },
});
