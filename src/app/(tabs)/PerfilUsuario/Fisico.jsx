import { View, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../../components/Header";
import Colors from "../../../../constants/Colors";
import FormularioFisico from "../../../../components/Formularios/FormularioFisico";

// Builder fluente para compor a tela
class ScreenBuilder {
  constructor() {
    this.elements = [];
  }
  withHeader(props) {
    this.elements.push(<Header key="header" {...props} />);
    return this;
  }
  withFormularioFisico(props) {
    this.elements.push(<FormularioFisico key="formFisico" {...props} />);
    return this;
  }
  build() {
    return this.elements;
  }
}

const Fisico = () => {
  const content = new ScreenBuilder()
    .withHeader({ ativo: true })
    .withFormularioFisico()
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
  },
});

export default Fisico;
