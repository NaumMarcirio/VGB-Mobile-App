import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../../components/Header";
import Colors from "../../../../constants/Colors";
import FormularioFisico from "../../../../components/Formularios/FormularioFisico";

const Fisico = () => {
  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} />
        <FormularioFisico />
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "80%",
    alignItems: "center",
  },
});

export default Fisico;
