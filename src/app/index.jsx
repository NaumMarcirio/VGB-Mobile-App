import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Botoes from "../../components/Botoes";
import Colors from "../../constants/Colors";
import { createTable } from '../../database/database';
import { useRouter } from "expo-router";

const BoasVindas = () => {
  const router = useRouter();

  useEffect(() => {
    createTable();
  }, []);


  const handleSubmit = () => {
    router.push(`/PerfilUsuario`)
  };

  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} texto="Naum Marcirio" />
        <View style={styles.areaTexto}>
          <Text style={[styles.titulo1]}>Bem-vindo ao seu</Text>
          <Text style={[styles.titulo2]}>GUIA NUTRICIONAL</Text>
          <Text style={[styles.subtitulo1]}>
            Onde cada escolha alimentar é selecionada para otimizar sua saúde e
            bem-estar!
          </Text>
          <Text style={[styles.subtitulo2]}>Gerado com I.A.</Text>
        </View>
        <View style={styles.botao}>
          <Botoes texto="Próximo" ativo={false} submit={handleSubmit} />
        </View>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  areaTexto: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 100,
  },
  titulo1: {
    color: Colors.brancoBase,
    fontSize: 16,
    fontFamily: "KodChasanRegular",
  },
  titulo2: {
    color: Colors.vermelhoBase,
    fontSize: 20,
    marginBottom: 30,
    fontFamily: "KodChasanRegular",
  },
  subtitulo1: {
    color: Colors.brancoBase,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "KodChasanRegular",
  },
  subtitulo2: {
    color: Colors.brancoBase,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 70,
    fontFamily: "KodChasanRegular",
  },
  botao: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 120,
  },
});

export default BoasVindas;
