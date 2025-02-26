import { Text, StyleSheet, View } from "react-native";
import Colors  from "../constants/colors";
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
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.riple,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.riple,
    padding: 12,
  },
});
