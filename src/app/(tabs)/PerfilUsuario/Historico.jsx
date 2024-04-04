import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Botoes from "../../../../components/Botoes";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../../components/Header";
import Colors from "../../../../constants/Colors";
import JanelaAtual from "../../../../components/JanelaAtual";
import FormularioHistorico from "../../../../components/Formularios/FormularioHistorico";

const Historico = () => {
  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} texto="Naum Marcirio" />
        <JanelaAtual titulo="Histórico" />
        <FormularioHistorico />
        <View style={styles.botao}>
          <Botoes
            texto="Avançar"
            ativo={true}
            urlProximo="PerfilUsuario/ProblemasAlimentares"
            urlAnterior="PerfilUsuario/Fisico"
          />
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
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 70,
  },
});

export default Historico;
