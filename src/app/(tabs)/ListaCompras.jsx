import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../components/Header";
import Colors from "../../../constants/Colors";
import React, { useState, useEffect } from "react";
import { buscaLista } from "../../../database/buscaLista";

import JanelaAtual from "../../../components/JanelaAtual";

const ListaCompras = () => {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      console.log("Buscando lista ...");
      const data = await buscaLista();
      console.log(data);
      setLista(data);
    } catch (error) {
      console.error("Erro ao carregar dados da lista:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} />
        <Text style={styles.tituloListaCompras}>Lista de Compras</Text>
      </View>
      {lista === null ? (
        <Text style={styles.TextoCarregando}>° ° °</Text> // Mostra três pontos se lista é null
      ) : (
        <View style={styles.ScrollViewContainer}>
          <ScrollView>
            <Text style={styles.TextoLista}>{lista.texto}</Text>
          </ScrollView>
        </View>
      )}
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
  tituloListaCompras: {
    color: Colors.brancoBase,
    paddingTop: 170,
    fontSize: 20,
    fontFamily: "KodChasanBold",
  },
  ScrollViewContainer: {
    borderWidth: 1,
    borderColor: Colors.brancoBase,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    height: "60%",
    width: "80%",
    padding: 30,
    marginBottom: 60,
  },
  TextoLista: {
    color: Colors.brancoBase,
    fontSize: 16,
    fontFamily: "KodChasanMedium",
    margin: 10,
  },
  TextoCarregando: {
    color: Colors.cinzaBase,
    fontSize: 14,
    fontFamily: "KodChasanMedium",
    position: "absolute",
    top: "50%",
  },
});

export default ListaCompras;
