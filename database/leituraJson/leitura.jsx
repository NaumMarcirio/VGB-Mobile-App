import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bjson_texto, Bjson_ingredientes } from "../variaveis";

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
  const carregarDadosDaLista = async () => {
    try{
      Bjson_ingredientes = "{'ingredientes': {'Pão': {'quantidade': '8 fatias','marcado': 0},'Presunto': {'quantidade': '150g','marcado': 0},'Arroz': {'quantidade': '1 kg','marcado': 0},'Feijão': {'quantidade': '500g','marcado': 0},'Peito de frango': {'quantidade': '500g','marcado': 0},'Maçãs': {'quantidade': '6 unidades','marcado': 0},'Cenoura': {'quantidade': '3 unidades','marcado': 0},'Abobrinha': {'quantidade': '1 unidade','marcado': 0},'Batata': {'quantidade': '3 unidades','marcado': 0},'Caldo de galinha': {'quantidade': '2 cubos','marcado': 0},'Leite': {'quantidade': '1 litro','marcado': 0},'Pão de queijo': {'quantidade': '10 unidades','marcado': 0},'Macarrão': {'quantidade': '500g','marcado': 0},'Molho de tomate': {'quantidade': '500ml','marcado': 0},'Filé de peixe': {'quantidade': '300g','marcado': 0},'Brócolis': {'quantidade': '1 maço','marcado': 0},'Alface': {'quantidade': '1 maço','marcado': 0},'Tomate': {'quantidade': '5 unidades','marcado': 0},'Pepino': {'quantidade': '1 unidade','marcado': 0},'Ovos': {'quantidade': '1 dúzia','marcado': 0},'Cebola': {'quantidade': '2 unidades','marcado': 0},'Pimentão': {'quantidade': '1 unidade','marcado': 0},'Iogurte natural': {'quantidade': '1 pote grande','marcado': 0},'Massa de pizza': {'quantidade': '1 unidade','marcado': 0},'Queijo para pizza': {'quantidade': '200g','marcado': 0},'Arroz integral': {'quantidade': '500g','marcado': 0},'Atum em lata': {'quantidade': '1 lata','marcado': 0},'Pão para sanduíche': {'quantidade': '8 unidades','marcado': 0},'Café': {'quantidade': '250g','marcado': 0},'Farinha de trigo': {'quantidade': '500g','marcado': 0},'Mel': {'quantidade': '200g','marcado': 0},'Carne para churrasco': {'quantidade': '500g','marcado': 0},'Linguiça': {'quantidade': '300g','marcado': 0},'Espetinhos de vegetais': {'quantidade': '1 pacote','marcado': 0},'Carvão': {'quantidade': '1 saco','marcado': 0},'Frutas variadas para salada': {'quantidade': 'a gosto','marcado': 0},'Massa para molho de tomate': {'quantidade': '500g','marcado': 0},'Alga para sushi': {'quantidade': '1 pacote','marcado': 0},'Arroz para sushi': {'quantidade': '500g','marcado': 0},'Cogumelos': {'quantidade': '200g','marcado': 0},'Arroz arbóreo': {'quantidade': '500g','marcado': 0},'Caldo de legumes': {'quantidade': '1 cubo','marcado': 0}}}"
    } catch(error){
      console.error('Erro ao carregar lista de compras:', error);
    }
  }
  useEffect(() => {
    carregarRefeicoes();
    carregarDadosDaLista();
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
