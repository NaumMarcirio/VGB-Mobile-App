import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Botoes from "../../../../components/Botoes";

const InfoGerais = () => {
  return (
    <>
      <Text>Info Gerais</Text>
      <Botoes
        texto="Próximo"
        urlAnterior={""}
        urlProximo="PerfilUsuario/Fisico"
        ativo={true}
      />
    </>
  );
};

export default InfoGerais;
