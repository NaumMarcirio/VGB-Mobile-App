import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReadJSONScreen = () => {
  const [refeicoes, setRefeicoes] = useState(null);


  const carregarRefeicoes = async () => {
    try {

      const response = require('../refeicoes.json');
      setRefeicoes(response.refeicoes);
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
