
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import Colors from '../../../constants/Colors';
import React, { useState } from "react";
import { CheckBox } from '@rneui/base';



const ListaCompras = () => {
  const [itens, setItens] = useState([
    { nome: 'Arroz', id: '1', marcado: false },
    { nome: 'Feijão', id: '2', marcado: false },
    { nome: 'Açúcar', id: '3', marcado: false },
    { nome: 'Açúcar', id: '3', marcado: false },
    { nome: 'Açúcar', id: '3', marcado: false },
    { nome: 'Açúcar', id: '3', marcado: false },
    { nome: 'Açúcar', id: '3', marcado: false },
    { nome: 'Açúcar', id: '3', marcado: false },
    { nome: 'verde', id: '3', marcado: false },
   
  ]);

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
        <Header ativo={true} texto="Naum Marcirio" />
      </View>
      <View style={styles.ScrollViewContainer}>
        <ScrollView style={styles.ScrollView}>
          <FlatList
            data={itens}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <CheckBox style= {styles.CheckBox}
                  size={8}
                  checked={item.marcado}
                  onPress={() => marcarItem(item.id)}
                  checkedColor='green'
                  uncheckedColor='white'
                />
                <Text style={styles.itemTexto}>{item.nome}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
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
    padding: 15,
    marginTop: 20,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  itemTexto: {
    marginLeft: 10,
  },
  ScrollViewContainer:{
    width : '80%',
    backgroundColor: 'white',
    marginTop:150,
    marginBottom:30,
  },
  ScrollView:{
    width : '100%',
  },
  CheckBox:{
    size : 8,
    backgroundColor : 'transparent',
    borderColor: Colors.cinzaBase,
    borderWidth: 1,
  }
});

export default ListaCompras;
