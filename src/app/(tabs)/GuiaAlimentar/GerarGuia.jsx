import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../../components/Header";
import Colors from "../../../../constants/Colors";
import Botoes from "../../../../components/Botoes";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ActivityIndicator } from "react-native-paper";
import { fetchChatGPTResponse } from "../../../../components/requisicaoGPT/ChamaApi";
import { inserirRefeicao } from "../../../../database/insetRefeicoes";
import { inserirLista } from "../../../../database/insertLista";
import { refeicoes } from "../../../../database/database";

import {
  Bidade,
  Baltura,
  Bpeso,
  Bgenero,
  Bnivel_de_atividade,
  Bgordura,
  Bcalorias,
  Bhistorico_medico,
  Bintolerancias,
  Bexcluir_alimentos,
  carregarDadosDoUsuario,
} from "../../../../database/variaveis";

const GerarGuia = () => {
  let novasRefeicoes = [];
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const key = "";
  const prompt1 = `Gere um plano alimentar para 1 dia de pratos bem diversificados e fora do comum, para um(a) ${Bgenero} com ${Bidade} anos, ${Baltura} cm, ${Bpeso} kg, que tem um nível de atividade ${Bnivel_de_atividade}, ${Bgordura}% de gorduras totais e deve consumir ${Bcalorias} cal por dia. Histórico medico: ${Bhistorico_medico}. Intolerâncias: ${Bintolerancias}. Excluir do plano alimentar: ${Bexcluir_alimentos}. Em forma de lista seguindo a exata formatação sem nada a mais.
  "Café da manhã:
    -quantidade de cada item e exemplo de refeição "2 ovos mexidos, 100 gramas de tilapia"

  Almoço:
    -quantidade de cada item e exemplo de refeição
  
  Lanche da tarde:
    -quantidade de cada item e exemplo de refeição
  
  Jantar:
    -quantidade de cada item e exemplo de refeição
`;

  // Crie uma classe para o fluxo fluente
  class GuiaAlimentarBuilder {
    constructor(key, prompt1, prompt2) {
      this.key = key;
      this.prompt1 = prompt1;
      this.prompt2 = prompt2;
      this.novasRefeicoes = [];
    }

    async gerarRefeicoes(qtd = 7) {
      for (let i = 0; i < qtd; i++) {
        const data = await fetchChatGPTResponse(this.key, this.prompt1, 200);
        await inserirRefeicao(data.choices[0].message.content);
        this.novasRefeicoes.push(data.choices[0].message.content);
      }
      return this;
    }

    async gerarLista() {
      const promptLista = `segue minhas refeições da semana, voce pode gerar apenas uma lista de compras pra mim agrupando itens iguais e colocando a quantidade tambem "${this.novasRefeicoes}"`;
      const data = await fetchChatGPTResponse(this.key, promptLista, 1000);
      await inserirLista(data.choices[0].message.content);
      return this;
    }
  }

  useEffect(() => {
    carregarDadosDoUsuario();
  }, []);

  const handleSubmit = async () => {
    refeicoes();
    setLoading(true);
    try {
      await new GuiaAlimentarBuilder(key, prompt1, prompt2)
        .gerarRefeicoes()
        .then((builder) => builder.gerarLista());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    router.push(`GuiaAlimentar/GuiaAlimentar`);
  };

  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} />

        <View style={styles.containerConteudo}>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={Colors.verdeBase} />
            </View>
          ) : (
            <>
              <Text style={styles.titulo}>Guia Alimentar</Text>
              <View style={styles.containerBotao}>
                <Botoes
                  texto="Gerar Semana"
                  urlAnterior={""}
                  submit={handleSubmit}
                  padding={100}
                />
                <Entypo name="dots-three-horizontal" size={24} color="white" />
              </View>
            </>
          )}
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
    alignItems: "center",
  },

  containerConteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 190,
  },
  containerBotao: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingBottom: 130,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 110,
  },
  titulo: {
    color: Colors.brancoBase,
    fontSize: 20,
    fontFamily: "KodChasanBold",
  },
});

export default GerarGuia;
