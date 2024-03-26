import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
const Botoes = ({ texto, urlProximo, urlAnterior, ativo }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {ativo && (
        <TouchableOpacity
          onPress={() => router.push(`/${urlAnterior}`)}
          style={styles.botaoAnterior}
        >
          <Text style={styles.textoBotaoAnterior}>Voltar</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => router.push(`/${urlProximo}`)}
        style={styles.botaoProximo}
      >
        <Text style={styles.textoBotaoProximo}>{texto}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 80,
  },
  botaoProximo: {
    backgroundColor: Colors.verdeBase,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  textoBotaoProximo: {
    fontSize: 16,
    fontFamily: "KodChasanMedium",
  },
  textoBotaoAnterior: {
    fontSize: 16,
    fontFamily: "KodChasanMedium",
    color: Colors.pretoBase,
  },
});

export default Botoes;
