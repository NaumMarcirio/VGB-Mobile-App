import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Botoes from "../../../../components/Botoes";

const Historico = () => {
  return (
    <Botoes
      texto="Avançar"
      ativo={true}
      urlProximo="PerfilUsuario/ProblemasAlimentares"
      urlAnterior="PerfilUsuario/Fisico"
    />
  );
};

export default Historico;
