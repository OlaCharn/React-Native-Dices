import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

//импортировали и window - это все за исключением status bar
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.riple,
    padding: deviceWidth < 380 ? 12 : 24 ,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24 ,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.riple,
    fontSize: deviceWidth < 380 ? 24 : 36 ,
    //fontWeight: "bold",
    fontFamily: "open-sans-bold"
  },
});
