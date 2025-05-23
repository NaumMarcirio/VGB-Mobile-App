import { View, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../../components/Header";
import Colors from "../../../../constants/Colors";
import JanelaAtual from "../../../../components/JanelaAtual";
import FormularioHistorico from "../../../../components/Formularios/FormularioHistorico";

// Builder fluente para compor a tela
class ScreenBuilder {
  constructor() {
    this.elements = [];
  }
  withHeader(props) {
    this.elements.push(<Header key="header" {...props} />);
    return this;
  }
  withJanelaAtual(props) {
    this.elements.push(<JanelaAtual key="janela" {...props} />);
    return this;
  }
  withFormularioHistorico(props) {
    this.elements.push(<FormularioHistorico key="formHistorico" {...props} />);
    return this;
  }
  build() {
    return this.elements;
  }
}

const Historico = () => {
  const content = new ScreenBuilder()
    .withHeader({ ativo: true })
    .withJanelaAtual({ titulo: "Histórico" })
    .withFormularioHistorico()
    .build();

  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>{content}</View>
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
  }
});

export default Historico;
