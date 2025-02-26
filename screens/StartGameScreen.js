import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

function StartGameScreen({onPickNumber}) {
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
    <View style={styles.inputContainer}>
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
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "column",
    alignItems: "center",
    //flex: 1,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary600,
    borderRadius: 10,

    elevation: 6, //shadow for Andriod
    shadowColor: "black", //shadow for ios
    shadowOffset: { width: 0, height: 2 }, //shadow for ios
    shadowRadius: 6, //shadow for ios
    shadowOpacity: 0.25, //shadow for ios
  },
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
});
