import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { View, Text, StyleSheet } from "react-native";

const JanelaAtual = ({ titulo }) => {
  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
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
