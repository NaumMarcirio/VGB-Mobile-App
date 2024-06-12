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
import { inserirRefeicao } from "../../../../database/insetRefeicoes";
import { buscaRefeicoes } from "../../../../database/buscaRefeicoes";
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
  const prompt = `Gere um plano alimentar para exatos 1 dias de pratos diversificados, para um(a) ${Bgenero} com ${Bidade} anos, ${Baltura} cm, ${Bpeso} kg, que tem um nível de atividade ${Bnivel_de_atividade}, ${Bgordura}% de gorduras totais e deve consumir ${Bcalorias} cal por dia. Histórico medico: ${Bhistorico_medico}. Intolerâncias: ${Bintolerancias}. Excluir do plano alimentar: ${Bexcluir_alimentos}. Gere um objeto JavaScript seguindo o seguinte formato alterando os pratos de forma diversificada 
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

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    router.push(`GuiaAlimentar/GuiaAlimentar`)
  };


  const handTetse = async () =>{
    setLoading(true);
    const prompt = `Gere um plano alimentar para exatos 1 dias de pratos diversificados, para um(a) ${Bgenero} com ${Bidade} anos, ${Baltura} cm, ${Bpeso} kg, que tem um nível de atividade ${Bnivel_de_atividade}, ${Bgordura}% de gorduras totais e deve consumir ${Bcalorias} cal por dia. Histórico medico: ${Bhistorico_medico}. Intolerâncias: ${Bintolerancias}. Excluir do plano alimentar: ${Bexcluir_alimentos}, gere em forma de lista` 
    try{
      //console.log(prompt)
      //const data = await fetchChatGPTResponse(key, prompt);
      //const ret = data.choices[0].message.content
      const ret =`Plano alimentar para 1 dia:

Café da manhã:
- 2 ovos mexidos com 1 colher de sopa de queijo cottage
- 1 fatia de pão integral
- 1 xícara de chá verde

Lanche da manhã:
- 1 maçã

Almoço:
- 100g de peito de frango grelhado
- 1/2 xícara de quinoa cozida
- Salada de folhas verdes com tomate e pepino temperada com azeite e limão

Lanche da tarde:
- 1 iogurte natural desnatado

Jantar:
- 100g de salmão grelhado
- 1/2 xícara de arroz integral
- Brócolis cozidos no vapor

Ceia:
- 1 xícara de chá de camomila.`

      console.log('----------------------------------------INSERIR--------------------------------------------------')
      const a  = await inserirRefeicao(ret)
      console.log(a)
      console.log('-------------------------------------------------------------------------------------------------')     
      console.log('----------------------------------------CARREGA--------------------------------------------------')
      const b = await buscaRefeicoes()
      console.log(b)
      console.log('-------------------------------------------------------------------------------------------------')        
    }
    catch(err){
      console.error(err)
    }
    finally{
      setLoading(false);
    }
    router.push(`GuiaAlimentar/GuiaAlimentar`)
  }

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
                submit={handTetse}
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