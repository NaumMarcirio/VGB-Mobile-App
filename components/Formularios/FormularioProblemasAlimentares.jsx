import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Botoes from "../Botoes";
import { useRouter } from "expo-router";
import {
  Bintolerancias,
  BsetIntolerancias,
  inserirOuAtualizarUsuario
} from '../../database/variaveis';

const FormularioProblemasAlimentares = () => {
  const router = useRouter();
  const [problemasAlimentares, setProblemasAlimentares] = useState(Bintolerancias);

  useEffect(() => {
    inserirOuAtualizarUsuario();
  }, []);

  const handleSubmit = () => {
    BsetIntolerancias(problemasAlimentares)

    inserirOuAtualizarUsuario()

    router.push(`PerfilUsuario/NaoIncluir`)

  };

  return (
    <View style={styles.container}>
      <View style={styles.containerProblemasAlimentares}>
        <Text style={styles.label}>Alergias/Intolerâncias</Text>
        <TextInput
          value={problemasAlimentares.toString()}
          onChangeText={setProblemasAlimentares}
          style={styles.inputMaior}
          color={Colors.brancoBase}
          inputMode="text"
          placeholder="Ex: Lactose"
          placeholderTextColor={Colors.cinzaBase} // Define a cor do placeholder
          textAlignVertical="top" // Alinha o texto verticalmente para o topo
        />
      </View>
      <View style={styles.botao}>
        <Botoes
          texto="Próximo"
          ativo={true}
          urlAnterior="PerfilUsuario/Historico"
          submit={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    gap: 12,
  },
  containerProblemasAlimentares: {
    flexDirection: "column",
    paddingTop: 80,
  },
  botao: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: -450,
  },
  inputMaior: {
    height: 200,
    width: 300, // Alterado para preencher todo o espaço disponível
    borderWidth: 1,
    borderRightColor: Colors.brancoBase,
    borderLeftColor: Colors.brancoBase,
    borderTopColor: Colors.brancoBase,
    borderBottomColor: Colors.brancoBase,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    paddingLeft: 18,
    paddingTop: 12,
  },

  label: {
    color: Colors.brancoBase,
    fontSize: 14,
    fontFamily: "KodChasanMedium",
    paddingBottom: 30,
  },
});

export default FormularioProblemasAlimentares;
