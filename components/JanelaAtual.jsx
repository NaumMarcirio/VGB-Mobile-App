import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { View, Text, StyleSheet } from "react-native";

const JanelaAtual = ({ titulo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftIcon}>
        <AntDesign name="left" size={14} color={Colors.brancoBase} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
      <View style={styles.rightIcon}>
        <AntDesign name="right" size={14} color={Colors.brancoBase} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -380,
  },
  leftIcon: {
    marginRight: "auto",
  },
  rightIcon: {
    marginLeft: "auto",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  titulo: {
    color: Colors.brancoBase,
    fontFamily: "KodChasanBold",
  },
});

export default JanelaAtual;
