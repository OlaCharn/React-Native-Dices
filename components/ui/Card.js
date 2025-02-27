import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
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

})