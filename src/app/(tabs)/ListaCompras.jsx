import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../components/Header";
import Colors from "../../../constants/Colors";
import Botoes from "../../../components/Botoes";

const ListaCompras = () => {
  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} texto="Naum Marcirio" />
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

export default ListaCompras;
