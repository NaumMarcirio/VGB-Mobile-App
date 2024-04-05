import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../components/Header";
import Colors from "../../../constants/Colors";

const ListaCompras = () => {
  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} texto="Naum Marcirio" />
      </View>
      <View style={styles.containerTitulos}>
        <Text style={styles.titulo}>Lista de Compras</Text>
        <Text style={styles.subtitulo}>Sem Resultados...</Text>
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

  containerTitulos: {
    alignItems: "center",
    justifyContent: "center",
    flex: 8,
    gap: 12,
  },
  titulo: {
    color: Colors.brancoBase,
    fontFamily: "KodChasanBold",
    fontSize: 18,
  },
  subtitulo: {
    color: Colors.cinzaBase,
    fontFamily: "KodChasanBold",
    fontSize: 14,
  },
});

export default ListaCompras;
