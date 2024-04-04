import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Colors from "../../constants/Colors";

const FormularioProblemasAlimentares = () => {
  const [problemasAlimentares, setProblemasAlimentares] = useState("");

  const handleSubmit = () => {
    const data = {
      problemasAlimentares,
    };
    console.log(data); // Aqui você pode fazer o que desejar com os dados, como enviar para o servidor, por exemplo
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerProblemasAlimentares}>
        <Text style={styles.label}>Alergias/Intolerâncias</Text>
        <TextInput
          onChangeText={setProblemasAlimentares}
          style={styles.inputMaior}
          color={Colors.brancoBase}
          inputMode="text"
          placeholder="Ex: Lactose"
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
  containerProblemasAlimentares: {
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

export default FormularioProblemasAlimentares;
