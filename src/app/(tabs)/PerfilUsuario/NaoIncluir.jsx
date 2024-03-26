import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Botoes from "../../../../components/Botoes";

const NaoIncluir = () => {
  return (
    <Botoes
      texto="Avançar"
      ativo={true}
      urlProximo="GuiaAlimentar"
      urlAnterior="PerfilUsuario/ProblemasAlimentares"
    />
  );
};

export default NaoIncluir;
