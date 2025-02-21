import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad" //different for different devices
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: "#4e0329",
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
    borderBottomColor: "#ddb52d",
    borderBottomWidth: 2,
    color: "#FD9D12",
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
