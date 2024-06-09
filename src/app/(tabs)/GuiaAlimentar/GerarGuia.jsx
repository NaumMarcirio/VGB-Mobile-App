import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../../components/Header";
import Colors from "../../../../constants/Colors";
import Botoes from "../../../../components/Botoes";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ActivityIndicator } from 'react-native-paper';
import { fetchChatGPTResponse } from '../../../../components/requisicaoGPT/ChamaApi'
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
} from '../../../../database/variaveis';


const GerarGuia = () => {
  carregarDadosDoUsuario()
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const key = '';
  const prompt = `Gere um plano alimentar para exatos 7 dias de pratos diversificados, para um(a) ${Bgenero} com ${Bidade} anos, ${Baltura} cm, ${Bpeso} kg, que tem um nível de atividade ${Bnivel_de_atividade}, ${Bgordura}% de gorduras totais e deve consumir ${Bcalorias} cal por dia. Histórico medico: ${Bhistorico_medico}. Intolerâncias: ${Bintolerancias}. Excluir do plano alimentar: ${Bexcluir_alimentos}. Gere um objeto JavaScript seguindo o seguinte formato alterando os pratos de forma diversificada 
  "const dataRefeicoes = [
    {
        "manha": {
            "prato": "ex prato 1",
            "marcado": false
        },
        "tarde": {
            "prato": "ex prato 2",
            "marcado": false
        },
        "noite": {
            "prato": "ex prato 3",
            "marcado": false
        },
        "ceia": {
            "prato": "ex prato 4",
            "marcado": false
        }
    },
    ...]`;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      console.log(prompt)
      const data = await fetchChatGPTResponse(key, prompt);
      console.log(data.choices[0].message.content)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    router.push(`GuiaAlimentar/GuiaAlimentar`)
  };

  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} />
        <View style={styles.containerBotao}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.verdeBase} />
          ) : (
            <>
              <Botoes
                texto="Gerar Semana"
                urlAnterior={""}
                submit={handleSubmit}
                padding={100}
              />
              <Entypo name="dots-three-horizontal" size={24} color="white" />
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
  containerBotao: {
    alignItems: "center",
    gap: 12,
    flex: 1,
    justifyContent: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GerarGuia;