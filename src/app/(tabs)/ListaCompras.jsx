import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import Colors from '../../../constants/Colors';
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import ingredientesJSON from '../../../database/listaCompras.json';
import JanelaAtual from '../../../components/JanelaAtual';

const ListaCompras = () => {
  const [itens, setItens] = useState(() => {
    const data = ingredientesJSON;
    return Object.entries(data.ingredientes).map(([nome, { quantidade, marcado }]) => ({
      nome,
      quantidade,
      marcado,
      id: nome.toLowerCase().replace(/\s/g, "-")
    }));
  });

  const marcarItem = (id) => {
    setItens(itens.map((item) => {
      if (item.id === id) {
        return { ...item, marcado: !item.marcado };
      }
      return item;
    }));
  };

  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} />
        <JanelaAtual titulo="Lista de Compras" />
      </View>
      <View style={styles.ScrollViewContainer}>
        <FlatList style={styles.flatList}
          data={itens}
          renderItem={({ item }) => (
            <View style={styles.item}>

              <Checkbox
                status={item.marcado ? 'checked' : 'unchecked'}
                onPress={() => marcarItem(item.id)}
                uncheckedColor={Colors.brancoBase}
                color={Colors.verdeBase}
              />
              <View style={styles.containerTexto}>
                <Text style={item.marcado ? styles.itemTextoM : styles.itemTexto}>{item.nome}</Text>
                <Text style={item.marcado ? styles.quantidadeTextoM : styles.quantidadeTexto}>{item.quantidade}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTitulos: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 8,
    gap: 12,
  },
  titulo: {
    color: Colors.brancoBase,
    fontFamily: 'KodChasanBold',
    fontSize: 18,
  },
  subtitulo: {
    color: Colors.cinzaBase,
    fontFamily: 'KodChasanBold',
    fontSize: 14,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#bbb',
    borderWidth: 0,
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: 'transparent',

  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  itemTexto: {
    marginLeft: 10,
    color: Colors.brancoBase,


  },
  itemTextoM: {
    marginLeft: 10,
    color: Colors.verdeBase,
    textDecorationLine: 'line-through'

  },
  quantidadeTexto: {
    marginLeft: 10,
    color: Colors.brancoBase
  },
  quantidadeTextoM: {
    marginLeft: 10,
    color: Colors.verdeBase,
    textDecorationLine: 'line-through',
  },
  ScrollViewContainer: {
    width: '80%',
    backgroundColor: 'transparent',
    top: '30%',

  },
});

export default ListaCompras;