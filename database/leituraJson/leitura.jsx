import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bjson_texto } from "../variaveis";

const ReadJSONScreen = () => {
  let [refeicoes, setRefeicoes] = useState(null);

  const carregarRefeicoes = async () => {
    try {
      Bjson_texto = "{'refeicoes': {'segunda-feira': {'8am': {'prato': 'Pão com presunto','marcado': 0},'12pm': {'prato': 'Arroz, feijão e frango','marcado': 0},'5pm': {'prato': 'Frutas','marcado': 0},'9pm': {'prato': 'Sopa de legumes','marcado': 0}},'terca-feira': {'8am': {'prato': 'Café com leite e pão de queijo','marcado': 0},'12pm': {'prato': 'Macarrão com molho de tomate','marcado': 0},'5pm': {'prato': 'Iogurte','marcado': 0},'9pm': {'prato': 'Peixe grelhado com legumes','marcado': 0}},'quarta-feira': {'8am': {'prato': 'Vitamina de frutas','marcado': 0},'12pm': {'prato': 'Feijoada','marcado': 0},'5pm': {'prato': 'Barrinha de cereal','marcado': 0},'9pm': {'prato': 'Salada de quinoa','marcado': 0}},'quinta-feira': {'8am': {'prato': 'Omelete com vegetais','marcado': 0},'12pm': {'prato': 'Salada de frango com quinoa','marcado': 0},'5pm': {'prato': 'Iogurte natural','marcado': 0},'9pm': {'prato': 'Pizza caseira','marcado': 0}},'sexta-feira': {'8am': {'prato': 'Café da manhã completo','marcado': 0},'12pm': {'prato': 'Frango com arroz integral','marcado': 0},'5pm': {'prato': 'Sanduíche de atum','marcado': 0},'9pm': {'prato': 'Sopa de legumes','marcado': 0}},'sabado': {'8am': {'prato': 'Panquecas com mel','marcado': 0},'12pm': {'prato': 'Churrasco','marcado': 0},'5pm': {'prato': 'Salada de frutas','marcado': 0},'9pm': {'prato': 'Massa com molho de tomate','marcado': 0}},'domingo': {'8am': {'prato': 'Tapioca recheada','marcado': 0},'12pm': {'prato': 'Sushi','marcado': 0},'5pm': {'prato': 'Crepe','marcado': 0},'9pm': {'prato': 'Risoto de cogumelos','marcado': 0}}}}"
      refeicoes = JSON.parse(Bjson_texto);
      setRefeicoes(refeicoes);
      console.log(refeicoes)
    } catch (error) {
      console.error('Erro ao carregar refeições:', error);
    }
  };

  useEffect(() => {
    carregarRefeicoes();
  }, []);

  if (!refeicoes) {
    return (
        <View style={styles.container}>
          <Text>Carregando...</Text>
        </View>
    );
  }

  return (
      <View style={styles.container}>
        {Object.keys(refeicoes).map((diaSemana) => (
            <View key={diaSemana} style={styles.item}>
              <Text style={styles.diaSemana}>{diaSemana}</Text>
              {Object.keys(refeicoes[diaSemana]).map((horario) => (
                  <Text key={horario} style={styles.refeicao}>
                    {horario}: {refeicoes[diaSemana][horario]}
                  </Text>
              ))}
            </View>
        ))}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    marginBottom: 20,
  },
  diaSemana: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  refeicao: {
    fontSize: 16,
  },
});

export default ReadJSONScreen;
