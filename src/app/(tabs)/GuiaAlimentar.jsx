import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../components/Header";
import Colors from "../../../constants/Colors";
import Botoes from "../../../components/Botoes";
import { Entypo } from "@expo/vector-icons";

const GuiaAlimentar = () => {
  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} texto="Naum Marcirio" />
        <View style={styles.containerBotao}>
          <Botoes
            texto="Gerar Semana"
            urlAnterior={""}
            urlProximo="PerfilUsuario/Fisico"
            ativo={false}
            padding={100}
          />
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </View>
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
  containerBotao: {
    alignItems: "center",
    gap: 12,
    flex: 1,
    justifyContent: "center",
  },
});

export default GuiaAlimentar;
