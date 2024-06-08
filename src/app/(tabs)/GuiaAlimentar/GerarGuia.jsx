import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../../../components/Header";
import Colors from "../../../../constants/Colors";
import Botoes from "../../../../components/Botoes";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const GerarGuia = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const key = '';
  const prompt = 'Quais sao os maiores paises do mundo';

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.20,
          max_tokens: 200,
          top_p: 1,
        })
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    // router.push(`GuiaAlimentar/GuiaAlimentar`)
  };

  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} texto="Naum Marcirio" />
        <View style={styles.containerBotao}>
          <Botoes
            texto="Gerar Semana"
            urlAnterior={""}
            submit={handleSubmit}
            ativo={loading} // Desabilitar o botão quando estiver carregando
            padding={100}
          />
          <Entypo name="dots-three-horizontal" size={24} color="white" />
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
});

export default GerarGuia;
