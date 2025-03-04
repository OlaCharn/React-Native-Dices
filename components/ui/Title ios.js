import { Text, StyleSheet, View, Platform } from "react-native";
import Colors from "../../constants/colors";

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
    fontFamily: "open-sans-bold",
    fontSize: 18,
    //fontWeight: "bold",
    color: Colors.underline,
    textAlign: "center",
    //borderWidth: Platform.OS === "android" ? 2 : 4,
    //или можно использовать метод select
    //borderWidth: Platform.select({ios: 2 , android: 4 }) ,
    //или если мы определили файл, как Titel.android.js и Titel.ios.js, то пишем просто разные радиусы в разных файлах, ReactNative понимает, какой применить
    borderWidth:4,
    borderColor: Colors.riple,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
