import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Colors from "../../constants/Colors";
import RadioButtonRN from "radio-buttons-react-native";

const FormularioFisico = () => {
  const [nivelAtividade, setNivelAtividade] = useState("");
  const [gordura, setGordura] = useState(0);
  const [caloriasDiarias, setCaloriasDiarias] = useState(0);

  const nivelAtividadeDados = [
    {
      label: "Baixo",
    },
    {
      label: "Médio",
    },
    {
      label: "Alto",
    },
  ];
  const handleSubmit = () => {
    const data = {
      nivelAtividade,
      gordura,
      caloriasDiarias,
    };
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerNivelAtividade}>
        <Text style={styles.label}>Nivel de Atividade</Text>
        <View>
          <RadioButtonRN
            circleSize={14}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 12,
              alignItems: "center",
            }}
            boxStyle={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 24,
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 0,
              width: 102,
              gap: 12,
              paddingLeft: 18,
            }}
            textStyle={{
              fontFamily: "KodChasanMedium",
              fontSize: 14,
            }}
            data={nivelAtividadeDados}
            selectedBtn={(e) => setNivelAtividade(e)}
            activeColor={Colors.vermelhoBase}
            textColor={Colors.brancoBase}
            boxActiveBgColor={"transparent"}
            boxDeactiveBgColor={"transparent"}
          />
        </View>
      </View>
      <View style={styles.containerGordura}>
        <Text style={styles.label}>% De Gordura</Text>
        <TextInput
          onChangeText={setGordura}
          style={styles.inputMaior}
          color={Colors.brancoBase}
          inputMode="numeric"
        />
      </View>
      <View style={styles.containerCaloriasDiarias}>
        <Text style={styles.label}>Calorias Diárias</Text>
        <TextInput
          onChangeText={setCaloriasDiarias}
          style={styles.inputMaior}
          color={Colors.brancoBase}
          inputMode="numeric"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    gap: 12,
  },
  containerNivelAtividade: {
    flexDirection: "column",
    paddingTop: 40,
  },
  containerGordura: {
    flexDirection: "row",
    alignItems: "center",
    gap: 55,
    paddingTop: 80,
  },

  containerCaloriasDiarias: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 80,
    justifyContent: "space-between",
  },
  inputMaior: {
    height: 20,
    width: 180,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.brancoBase,
    borderBottomLeftRadius: 24,
    alignItems: "center",
    paddingLeft: 18,
    paddingBottom: 4,
  },
  inputMenor: {
    height: 20,
    width: 80,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.brancoBase,
    borderBottomLeftRadius: 24,
    alignItems: "center",
    paddingLeft: 18,
    paddingBottom: 4,
  },
  label: {
    color: Colors.brancoBase,
    fontSize: 14,
    fontFamily: "KodChasanMedium",
  },
  radioInput: {
    flexDirection: "row",
    width: 12,
    activeColor: Colors.verdeBase,
  },
});

export default FormularioFisico;
