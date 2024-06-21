import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../../constants/Colors";
import Header from "../../../../components/Header";
import JanelaAtual from "../../../../components/JanelaAtual";
import Cards from "../../../../components/Cards";

const GuiaAlimentar = () => {
  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} />
        <JanelaAtual titulo="Guia Alimentar" />
        <Cards />
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GuiaAlimentar;
