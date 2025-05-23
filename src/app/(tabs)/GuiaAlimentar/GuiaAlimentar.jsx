import { View, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../../constants/Colors";
import Header from "../../../../components/Header";
import JanelaAtual from "../../../../components/JanelaAtual";
import Cards from "../../../../components/Cards";

// Implementação de um builder fluente para a tela
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

  withCards(props) {
    this.elements.push(<Cards key="cards" {...props} />);
    return this;
  }

  build() {
    return this.elements;
  }
}

const GuiaAlimentar = () => {
  const content = new ScreenBuilder()
    .withHeader({ ativo: true })
    .withJanelaAtual({ titulo: "Guia Alimentar" })
    .withCards()
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
  },
});

export default GuiaAlimentar;
