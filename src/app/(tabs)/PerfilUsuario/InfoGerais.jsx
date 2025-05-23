import { View, StyleSheet } from "react-native";
import React from "react";
import Header from "../../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../../constants/Colors";
import FormularioGeral from "../../../../components/Formularios/FormularioGeral";

// Builder fluente para compor a tela
class ScreenBuilder {
  constructor() {
    this.elements = [];
  }
  withHeader(props) {
    this.elements.push(<Header key="header" {...props} />);
    return this;
  }
  withFormularioGeral(props) {
    this.elements.push(<FormularioGeral key="formGeral" {...props} />);
    return this;
  }
  build() {
    return this.elements;
  }
}

const InfoGerais = () => {
  const content = new ScreenBuilder()
    .withHeader({ ativo: true })
    .withFormularioGeral()
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
    width: "80%",
    alignItems: "center",
  },
  tituloPagina: {
    fontFamily: "KodChasanBold",
    color: Colors.brancoBase,
    fontSize: 20,
  },
});
export default InfoGerais;
