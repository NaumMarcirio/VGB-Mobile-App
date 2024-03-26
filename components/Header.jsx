import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Header = ({ ativo, texto }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/icone-canto-direito.png")}
      />
      {ativo && <Text style={styles.texto}>{texto}</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    top: 56,
    gap: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  logo: {
    height: 45,
    width: 45,
  },
  texto: {
    color: Colors.brancoBase,
    fontSize: 16,
    fontFamily: "KodChasanRegular",
  },
});
