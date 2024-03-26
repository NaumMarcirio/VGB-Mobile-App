import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Botoes from "../../../../components/Botoes";

const ProblemasAlimentares = () => {
  return (
    <Botoes
      texto="Avançar"
      ativo={true}
      urlProximo="PerfilUsuario/NaoIncluir"
      urlAnterior="PerfilUsuario/Historico"
    />
  );
};

export default ProblemasAlimentares;
