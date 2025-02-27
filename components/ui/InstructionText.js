import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children , style}) {
  return <Text style={[ styles.instructionText, style]}> {children} </Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",

    color: Colors.underline,
    fontSize: 24,
  },
});

/*
style={[ styles.instructionText, style]}> когда мы вот так пишем стиль, то потом мы можем
в дочернем компоненте добавить стиль элемента "поверх" путем прописывания стиля в самом элементе
*/