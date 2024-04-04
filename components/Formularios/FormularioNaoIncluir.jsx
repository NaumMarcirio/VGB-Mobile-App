import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Colors from "../../constants/Colors";

const FormularioNaoIncluir = () => {
  const [naoIncluir, setNaoIncluir] = useState("");

  const handleSubmit = () => {
    const data = {
      historico,
    };
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerNaoIncluir}>
        <Text style={styles.label}>Alimentos Para Não Incluir</Text>
        <TextInput
          onChangeText={setNaoIncluir}
          style={styles.inputMaior}
          color={Colors.brancoBase}
          inputMode="text"
          placeholder="Ex: Melancia"
          placeholderTextColor={Colors.cinzaBase} // Define a cor do placeholder
          textAlignVertical="top" // Alinha o texto verticalmente para o topo
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
  containerNaoIncluir: {
    flexDirection: "column",
    paddingTop: 80,
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

export default FormularioNaoIncluir;
