import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import dataRefeicoes from '../database/refeicoes';
import { Checkbox } from 'react-native-paper';

import Colors from '../constants/Colors';

const Cards = () => {
  const [refeicoes, setRefeicoes] = useState(dataRefeicoes);

  const toggleCheckbox = (refeicaoIndex, periodo) => {
    const updatedRefeicoes = [...refeicoes];
    updatedRefeicoes[refeicaoIndex][periodo].marcado = !updatedRefeicoes[refeicaoIndex][periodo].marcado;
    setRefeicoes(updatedRefeicoes);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.check}>
          <Checkbox
            status={item.manha.marcado ? 'checked' : 'unchecked'}
            onPress={() => toggleCheckbox(index, 'manha')}
            uncheckedColor={Colors.brancoBase}
            color={Colors.verdeBase}
          />
          <Text style={styles.hora}>8 am</Text>
        </View>
        <Text style={styles.prato}>{item.manha.prato}</Text>
        <View style={styles.check}>
          <Checkbox
            status={item.tarde.marcado ? 'checked' : 'unchecked'}
            onPress={() => toggleCheckbox(index, 'tarde')}
            uncheckedColor={Colors.brancoBase}
            color={Colors.verdeBase}
          />
          <Text style={styles.hora}>12 pm</Text>
        </View>
        <Text style={styles.prato}>{item.tarde.prato}</Text>

        <View style={styles.check}>
          <Checkbox
            status={item.noite.marcado ? 'checked' : 'unchecked'}
            onPress={() => toggleCheckbox(index, 'noite')}
            uncheckedColor={Colors.brancoBase}
            color={Colors.verdeBase}
          />
          <Text style={styles.hora}>4 pm</Text>
        </View>
        <Text style={styles.prato}>{item.noite.prato}</Text>

        <View style={styles.check}>
          <Checkbox
            status={item.ceia.marcado ? 'checked' : 'unchecked'}
            onPress={() => toggleCheckbox(index, 'ceia')}
            uncheckedColor={Colors.brancoBase}
            color={Colors.verdeBase}
          />
          <Text style={styles.hora}>8 pm</Text>
        </View>
        <Text style={styles.prato}>{item.ceia.prato}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={refeicoes}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width * 0.8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: Colors.brancoBase,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    top: '50%',
    padding: 30,
  },
  prato: {
    color: Colors.brancoBase,
    fontSize: 14,
    fontFamily: 'KodChasanMedium',
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 20,
  },
  hora: {
    color: Colors.brancoBase,
    fontSize: 14,
    fontFamily: 'KodChasanBold',
    margin: 10,
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Cards;
