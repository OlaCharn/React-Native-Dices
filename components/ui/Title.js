import { Text, StyleSheet, View } from "react-native";
import Colors  from "../../constants/colors";

function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold" ,
    fontSize: 18,
    //fontWeight: "bold",
    color: Colors.underline,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.riple,
    padding: 12,
  },
});
