import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Botoes from "../../../../components/Botoes";

const Fisico = () => {
  return (
    <>
      <Botoes
        texto="Avançar"
        ativo={true}
        urlProximo="PerfilUsuario/Historico"
        urlAnterior="PerfilUsuario/InfoGerais"
      />
    </>
  );
};

export default Fisico;
