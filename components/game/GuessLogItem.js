import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem} >
      <Text style={styles.itemText} ># {roundNumber} </Text>
      <Text style={styles.itemText} > Opponents Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 10 ,
    backgroundColor: Colors.riple,
    flexDirection:"row",
    justifyContent: 'space-between',
    width: "100%",
    elevation: 4,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.29,
    shadowRadius: 3
  },
  itemText: {
    fontFamily: "open-sans",
  }
})