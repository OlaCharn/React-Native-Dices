import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {


  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.riple }}
        // pressed нам надо для ios и именно так
        // если нажато, то примени стили "нажатости" или останься как есть
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnercontainer, styles.pressed]
            : styles.buttonInnercontainer
        }

      >
        <Text style={styles.buttonText}> {children} </Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 12,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnercontainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  //in order to have a visual effect from button pressing we need to use android-ripple
  //in ios we need to make an additional style "pressed" and apply it
  pressed: {
    opacity: 0.75,
  },
});
