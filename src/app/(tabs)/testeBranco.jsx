import { View, StyleSheet } from "react-native";
import React from "react";

import  ReadJSONScreen from '../../../database/leituraJson/leitura'


const testeBranco = () => {
  return (
      <View style={styles.container}>
        <ReadJSONScreen/>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default testeBranco;
