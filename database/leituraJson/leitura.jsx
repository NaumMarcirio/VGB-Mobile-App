import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReadJSONScreen = () => {
  const [refeicoes, setRefeicoes] = useState(null);

  // Função para carregar os dados do arquivo JSON
  const carregarRefeicoes = async () => {
    try {
      // Substitua 'caminho/do/seu/arquivo.json' pelo caminho do seu arquivo JSON
      const response = require('../estrutura.json');
      setRefeicoes(response.refeicoes); // Ajuste para acessar o objeto 'refeicoes' dentro do JSON
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
          {/* Usamos map para percorrer os horários e gerar um array de componentes Text */}
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
