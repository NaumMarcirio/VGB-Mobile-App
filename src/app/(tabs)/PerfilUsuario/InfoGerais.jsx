import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Botoes from "../../../../components/Botoes";
import Header from "../../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../../constants/Colors";
import JanelaAtual from "../../../../components/JanelaAtual";
import FormularioGeral from "../../../../components/Formularios/FormularioGeral";

const InfoGerais = () => {
  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} />
        <FormularioGeral />
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
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  tituloPagina: {
    fontFamily: "KodChasanBold",
    color: Colors.brancoBase,
    fontSize: 20,
  },
});
export default InfoGerais;
