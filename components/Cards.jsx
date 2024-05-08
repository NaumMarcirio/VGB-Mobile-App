import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import dataRefeicoes from '../database/refeicoes';
import { LinearGradient } from "expo-linear-gradient";
import Colors from '../constants/Colors';

const Cards = () => {
  const renderItem = ({ item }) => {
    return (
      <View
        style={styles.cardContainer}
      >
        <Text style={styles.hora}>9am</Text>
        <Text style={styles.prato}>{item.manha.prato}</Text>
        <Text style={styles.hora}>12pm</Text>
        <Text style={styles.prato}>{item.tarde.prato}</Text>
        <Text style={styles.hora}>16pm</Text>
        <Text style={styles.prato}>{item.noite.prato}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={dataRefeicoes}
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
    top:550,
    height:450,
    padding: 30,
  },
  prato: {
    color: Colors.brancoBase,
    fontSize: 14,
    fontFamily: "KodChasanMedium",
    margin:20
  },
  hora: {
    color: Colors.brancoBase,
    fontSize: 14,
    fontFamily: "KodChasanMedium",
    marginHorizontal:0,
    marginTop:20
  },
});

export default Cards;
